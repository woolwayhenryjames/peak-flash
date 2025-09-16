import { type LoaderFunctionArgs, redirect } from 'react-router';
import { validateInviteCode } from '~/services/user.server';

export function meta() {
  return [
    { title: 'Join Peak AI - Exclusive Invite' },
    {
      name: 'description',
      content:
        "You've been invited to join Peak AI! Click to accept the invitation and start earning Kindle Score points through crypto and AI campaigns. Join the community and compete with friends!",
    },
    {
      name: 'keywords',
      content:
        'Peak AI invite, join Peak AI, exclusive invitation, referral link, crypto campaigns, AI campaigns, earn rewards',
    },
    { name: 'robots', content: 'noindex, nofollow' }, // Invite pages should not be indexed
    { name: 'author', content: 'Peak AI' },

    // Open Graph
    { property: 'og:title', content: "You're Invited to Peak AI!" },
    {
      property: 'og:description',
      content:
        'Join Peak AI through this exclusive invite! Start earning through crypto and AI campaigns while competing with friends.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Peak AI' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Peak AI Invitation' },
    {
      name: 'twitter:description',
      content:
        'Accept this exclusive invitation to join Peak AI and start earning rewards through campaigns!',
    },
  ];
}

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
