import { redirect } from 'react-router';
import ActiveCampaigns from '~/components/ActiveCampaigns';
import FirstOpenHomeDialog from '~/components/Dialogs/FirstOpenHomeDialog';
import FollowUs from '~/components/FollowUs';
import { HomeSeparator } from '~/components/HomeSeperator';
import KindleScoreCard from '~/components/KindleScoreCard';
import QuickActions from '~/components/QuickActions';
import StartEarningSection from '~/components/StartEarningSection';
import { getDbUser } from '~/services/auth.server';
import { getCampaignsForUser } from '~/services/campaign.server';
import { getUserWithKindleRank } from '~/services/user-ranking.server';
import type { Route } from './+types/_landing._index';

export async function loader({ request }: Route.LoaderArgs) {
  const user = await getDbUser(request);
  if (user.isErr()) {
    throw redirect('/login');
  }

  // Get user with kindle rank and active campaigns with user participation
  const [userWithRank, campaigns] = await Promise.all([
    getUserWithKindleRank(user.value.id),
    getCampaignsForUser(user.value, { endDate: { gte: new Date() } }, 1, 3),
  ]);

  return { user: userWithRank, campaigns: campaigns.campaigns };
}

export default function Home({
  loaderData: { user, campaigns },
}: Route.ComponentProps) {
  return (
    <>
      <div className="space-y-6 px-6 pt-6">
        <KindleScoreCard
          rank={user?.kindleRank ?? 1}
          score={user?.kindleScore ?? 0}
        />
        <StartEarningSection />
      </div>
      <HomeSeparator />
      <div className="space-y-6 bg-gradient-to-b from-[#090917] to-black px-6">
        <ActiveCampaigns campaigns={campaigns} />
        <QuickActions />
        <FollowUs />
      </div>
      <FirstOpenHomeDialog score={user?.kindleScore ?? 0} />
    </>
  );
}
