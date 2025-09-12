import { type LoaderFunctionArgs, redirect } from 'react-router';
import { validateInviteCode } from '~/services/user.server';

export async function loader({ params }: LoaderFunctionArgs) {
  const { inviterId } = params;

  if (!inviterId) {
    // If no inviter ID, redirect to invite page
    return redirect('/invite');
  }

  // Validate that the inviter exists
  const isValidInviter = await validateInviteCode(inviterId);

  if (isValidInviter.isErr()) {
    // If inviter doesn't exist, redirect to home
    return redirect('/invite');
  }

  // Redirect to login with the inviter parameter
  return redirect(`/login?inviter=${encodeURIComponent(inviterId)}`);
}
