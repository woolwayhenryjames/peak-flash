import type { LoaderFunctionArgs } from 'react-router';
import { getSessionUser } from '~/services/auth.server';
import { getUserInfo } from '~/services/tiktok-api.server';

export async function loader({ request, params }: LoaderFunctionArgs) {
  // Get the current user from session
  const currentUser = await getSessionUser(request);
  if (currentUser.isErr()) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Get the requested user ID from params
  const requestedUserId = params.userId;
  if (!requestedUserId) {
    return Response.json({ error: 'User ID is required' }, { status: 400 });
  }

  // Get user's TikTok profile data
  const profile = await getUserInfo(requestedUserId);

  if (profile.isErr()) {
    return Response.json(
      {
        error: 'TikTok profile not found or access token invalid',
        suggestion: 'Please reconnect your TikTok account',
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
