import {
  DeleteObjectCommand,
  DeleteObjectsCommand,
  GetObjectCommand,
  ListObjectsV2Command,
  NoSuchKey,
  S3Client,
} from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import type { FileUpload } from "@remix-run/form-data-parser";
import { logger } from "~/services/logger.server";

const {
  AWS_S3_BUCKET_NAME,
  AWS_S3_REGION_NAME,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
} = process.env;

if (!AWS_S3_BUCKET_NAME) {
  throw new Error(
    `Storage is missing required configuration. ${JSON.stringify(process.env)}`
  );
}

if (!AWS_S3_REGION_NAME) {
  throw new Error("Storage is missing required configuration.");
}

if (!AWS_ACCESS_KEY_ID) {
  throw new Error("Storage is missing required configuration.");
}

if (!AWS_SECRET_ACCESS_KEY) {
  throw new Error("Storage is missing required configuration.");
}

const storage = new S3Client({
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  },
  region: AWS_S3_REGION_NAME,
  requestHandler: {
    httpsAgent: { maxSockets: 150, keepAlive: false },
  },
});

export const uploadHandler = async (fileUpload: FileUpload) => {
  const fileName = `user-upload/${Date.now()}-${fileUpload.name}`;
  const upload = await new Upload({
    client: storage,
    leavePartsOnError: false,
    params: {
      Bucket: AWS_S3_BUCKET_NAME,
      Key: `peakai/${fileName}`,
      Body: fileUpload.stream(),
    },
  }).done();

  if (upload.$metadata.httpStatusCode !== 200) {
    throw new Error("Failed to upload image to S3");
  }

  return `/${fileName}`;
};

export const getAsset = async (s3Key: string) => {
  const command = new GetObjectCommand({
    Bucket: AWS_S3_BUCKET_NAME,
    Key: `peakai/${s3Key}`,
  });

  try {
    const response = await storage.send(command);
    if (!response.Body) {
      throw new Response("Failed to get asset from S3", { status: 500 });
    }

    return response;
  } catch (error) {
    if (error instanceof NoSuchKey) {
      throw new Response("Not found", { status: 404 });
    }
  }
};

export const deleteAsset = async (fullPath: string) => {
  const command = new DeleteObjectCommand({
    Bucket: AWS_S3_BUCKET_NAME,
    Key: fullPath,
  });

  try {
    await storage.send(command);
  } catch (error) {
    logger.error("Error deleting asset:", error);
  }
};

export const deleteFolder = async (prefix: string) => {
  // Ensure the prefix ends with a slash to avoid deleting files with similar prefixes
  const folderPrefix = prefix.endsWith("/") ? prefix : `${prefix}/`;

  try {
    let continuationToken: string | undefined;

    do {
      // List objects with the folder prefix
      const listCommand = new ListObjectsV2Command({
        Bucket: AWS_S3_BUCKET_NAME,
        Prefix: folderPrefix,
        ContinuationToken: continuationToken,
      });

      const listResponse = await storage.send(listCommand);

      if (listResponse.Contents && listResponse.Contents.length > 0) {
        // Delete up to 1000 objects at a time (S3 limit for batch operations)
        const deleteCommand = new DeleteObjectsCommand({
          Bucket: AWS_S3_BUCKET_NAME,
          Delete: {
            Objects: listResponse.Contents.map((object) => ({
              Key: object.Key,
            })),
            Quiet: true,
          },
        });

        await storage.send(deleteCommand);
      }

      continuationToken = listResponse.NextContinuationToken;
    } while (continuationToken);

    return true;
  } catch (error) {
    logger.error("Error deleting folder:", error);
    return false;
  }
};

export const uploadFilesToS3 = async (
  files: { path: string; content: string; isBinary: boolean }[],
  prefix: string,
  mimeType: string
) => {
  const folderPrefix = prefix.endsWith("/") ? prefix : `${prefix}/`;
  await Promise.all(
    files.map(async (file) => {
      const ContentType = mimeType || "application/octet-stream";
      // If the file is binary, decode the base64 string to a Buffer
      const body = file.isBinary
        ? Buffer.from(file.content, "base64")
        : file.content;
      const upload = await new Upload({
        client: storage,
        leavePartsOnError: false,
        params: {
          Bucket: AWS_S3_BUCKET_NAME,
          Key: `${folderPrefix}${file.path}`,
          Body: body,
          ContentType,
        },
      }).done();
      if (upload.$metadata.httpStatusCode !== 200) {
        throw new Error(`Failed to upload file ${file.path} to S3`);
      }
    })
  );
};

export const listFilesInS3Folder = async (
  prefix: string
): Promise<string[]> => {
  const folderPrefix = prefix.endsWith("/") ? prefix : `${prefix}/`;
  let continuationToken: string | undefined;
  let allKeys: string[] = [];
  do {
    const listCommand = new ListObjectsV2Command({
      Bucket: AWS_S3_BUCKET_NAME,
      Prefix: folderPrefix,
      ContinuationToken: continuationToken,
    });

    const listResponse = await storage.send(listCommand);
    const keys =
      listResponse.Contents?.map((item) => item.Key || "").filter(Boolean) ||
      [];
    allKeys = allKeys.concat(keys);
    continuationToken = listResponse.NextContinuationToken;
  } while (continuationToken);
  return allKeys;
};

export const deleteFilesFromS3 = async (keys: string[]) => {
  if (keys.length === 0) {
    return;
  }
  const command = new DeleteObjectsCommand({
    Bucket: AWS_S3_BUCKET_NAME,
    Delete: {
      Objects: keys.map((Key) => ({ Key })),
      Quiet: true,
    },
  });
  await storage.send(command);
};

export const uploadImageFromUrl = async (
  imageUrl: string,
  userId: string
): Promise<string> => {
  try {
    // Fetch the image from the URL
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }

    // Get the image buffer
    const imageBuffer = await response.arrayBuffer();

    // Get content type from response or default to image/jpeg
    const contentType = response.headers.get("content-type") || "image/jpeg";

    // Generate a unique filename with timestamp
    const timestamp = Date.now();
    const extension = contentType.includes("png") ? "png" : "jpg";
    const fileName = `userAvatar/${userId}/${timestamp}.${extension}`;

    // Upload to S3
    const upload = await new Upload({
      client: storage,
      leavePartsOnError: false,
      params: {
        Bucket: AWS_S3_BUCKET_NAME,
        Key: `peakai/${fileName}`,
        Body: Buffer.from(imageBuffer),
        ContentType: contentType,
      },
    }).done();

    if (upload.$metadata.httpStatusCode !== 200) {
      throw new Error("Failed to upload avatar to S3");
    }

    return `/assets/${fileName}`;
  } catch (error) {
    logger.error("Error uploading image from URL:", error);
    throw error;
  }
};

export const cleanupOldUserAvatars = async (userId: string, keepLatest = 3) => {
  try {
    const prefix = `peakai/userAvatar/${userId}/`;
    const objects = await listFilesInS3Folder(prefix);

    if (objects.length <= keepLatest) {
      return; // Nothing to clean up
    }

    // Sort by key name (which includes timestamp) and keep only the latest
    const sortedObjects = objects
      .filter((key) => key.startsWith(prefix))
      .sort()
      .reverse(); // Most recent first

    const objectsToDelete = sortedObjects.slice(keepLatest);

    if (objectsToDelete.length > 0) {
      await deleteFilesFromS3(objectsToDelete);
      logger.info(
        `Cleaned up ${objectsToDelete.length} old avatar files for user ${userId}`
      );
    }
  } catch (error) {
    logger.error("Error cleaning up old user avatars:", error);
    // Don't throw - cleanup failure shouldn't break the main flow
  }
};
