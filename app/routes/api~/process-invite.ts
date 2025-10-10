import type { ActionFunctionArgs } from "react-router";
import { getSessionUser } from "~/services/auth.server";
import { logger } from "~/services/logger.server";
import { processInviteSignup } from "~/services/user.server";

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    // Get the authenticated user
    const userResult = await getSessionUser(request);
    if (userResult.isErr()) {
      return new Response("Unauthorized", { status: 401 });
    }

    const user = userResult.value;

    // Parse the request body
    const { inviterId } = await request.json();
    if (!inviterId) {
      return new Response("Inviter ID is required", { status: 400 });
    }
    if (user.id === inviterId) {
      return new Response("Cannot invite yourself", { status: 400 });
    }
    // Process the invite
    const result = await processInviteSignup(user.id, inviterId);

    if (result.isErr()) {
      logger.error("Failed to process invite:", result.error);
      return Response.json(
        {
          success: false,
          message: "Failed to process invite",
        },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Invite processed successfully",
      inviterId,
    });
  } catch (error) {
    logger.error("Error in process-invite API:", error);
    return Response.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
