import type { ActionFunctionArgs } from 'react-router';
import { getSessionUser } from '~/services/auth.server';
import { db } from '~/services/db.server';

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    // Get the authenticated user
    const userResult = await getSessionUser(request);
    if (userResult.isErr()) {
      return new Response('Unauthorized', { status: 401 });
    }

    const user = userResult.value;

    // Parse the request body
    const { walletAddress } = await request.json();
    if (!walletAddress) {
      return new Response('Wallet address is required', { status: 400 });
    }
    await db.user.update({
      where: { id: user.id },
      data: { walletAddress },
    });
    return Response.json({ success: true });
  } catch (error) {
    console.error('Error in process-invite API:', error);
    return Response.json(
      {
        success: false,
        message: 'Internal server error',
      },
      { status: 500 }
    );
  }
}
