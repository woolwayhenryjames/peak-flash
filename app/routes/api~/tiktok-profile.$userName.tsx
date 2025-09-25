import type { LoaderFunctionArgs } from "react-router";
import { getSessionUser } from "~/services/auth.server";
import { getUserInfo } from "~/services/tiktok-api.server";

export async function loader({ request, params }: LoaderFunctionArgs) {
  // Get the current user from session
  const currentUser = await getSessionUser(request);
  if (currentUser.isErr()) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Get the requested user name from params
  const requestedUserName = params.userName;
  if (!requestedUserName) {
    return Response.json({ error: "User name is required" }, { status: 400 });
  }

  // Get user's TikTok profile data
  const profile = await getUserInfo(requestedUserName);

  if (profile.isErr()) {
    return Response.json(
      {
        error: profile.error,
      },
      { status: 404 }
    );
  }

  // Return profile data with scope information
  return Response.json({
    success: true,
    data: profile.value,
  });
}
