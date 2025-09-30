import { type FileUpload, parseFormData } from "@remix-run/form-data-parser";
import { uploadHandler } from "~/services/aws-s3.server";

export async function transformFormData(request: Request) {
  // Handle file uploads for image field
  const formUploadHandler = async (fileUpload: FileUpload) => {
    if (
      fileUpload.fieldName === "image" &&
      fileUpload.type.startsWith("image/")
    ) {
      // Use the existing uploadHandler from aws-s3.server.ts
      const uploadPath = await uploadHandler(fileUpload);
      // Convert to full asset URL that can be served by the assets route
      return `/assets${uploadPath}`;
    }

    // Handle icon uploads for shareUrls
    if (
      fileUpload.fieldName.startsWith("icon-") &&
      fileUpload.type.startsWith("image/")
    ) {
      const uploadPath = await uploadHandler(fileUpload);
      return `/assets${uploadPath}`;
    }

    return null;
  };

  const formData = await parseFormData(request, formUploadHandler);
  const inputData = Object.fromEntries(formData) as Record<
    string,
    string | null
  >;

  // Use uploaded image path if file was uploaded, otherwise use URL if provided
  const image = inputData.image || inputData.imageUrl || undefined;

  // Process shareUrls and update with uploaded icon paths
  let processedShareUrls: Array<{ url: string; icon: string }> | undefined;
  if (inputData.shareUrls) {
    const parsedShareUrls = JSON.parse(inputData.shareUrls) as Array<{
      url: string;
      icon: string;
    }>;
    processedShareUrls = parsedShareUrls.map((shareUrl, index) => {
      // Look for uploaded icon files that match icon- pattern
      const iconKeys = Array.from(formData.keys()).filter((key) =>
        key.startsWith("icon-")
      );
      const matchingIconFile = iconKeys.find((key) => {
        const iconFile = formData.get(key) as string;
        return (
          iconFile && iconFile.length > 0 && key.endsWith(index.toString())
        );
      });

      if (matchingIconFile) {
        const iconFile = formData.get(matchingIconFile) as string;
        if (iconFile) {
          return { ...shareUrl, icon: iconFile };
        }
      }

      return shareUrl;
    });
  }

  const newData = {
    name: inputData.name,
    description: inputData.description || undefined,
    image,
    homepageUrl: inputData.homepageUrl || undefined,
    poolSize: Number.parseInt(inputData.poolSize || "0", 10),
    poolUnit: inputData.poolUnit || undefined,
    poolDescription: inputData.poolDescription || undefined,
    order: Number.parseInt(inputData.order || "0", 10),
    startDate: inputData.startDate ? new Date(inputData.startDate) : undefined,
    endDate: inputData.endDate ? new Date(inputData.endDate) : undefined,
    joinRequirement: inputData.joinRequirement
      ? JSON.parse(inputData.joinRequirement)
      : undefined,
    shareUrls: processedShareUrls,
    ownerId: inputData.ownerId || undefined,
  };
  return { intent: inputData.intent, id: inputData.id, data: newData };
}
