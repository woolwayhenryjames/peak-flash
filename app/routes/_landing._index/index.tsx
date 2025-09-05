import ActiveCampaigns from '~/components/ActiveCampaigns';
import FollowUs from '~/components/FollowUs';
import KindleScoreCard from '~/components/KindleScoreCard';
import QuickActions from '~/components/QuickActions';
import StartEarningSection from '~/components/StartEarningSection';

export default function Home() {
  return (
    <div className="space-y-6 px-6 py-6">
      <KindleScoreCard />
      <StartEarningSection />
      <ActiveCampaigns />
      <QuickActions />
      <FollowUs />
    </div>
  );
}
