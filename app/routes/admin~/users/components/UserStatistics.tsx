import type { UserStatistics } from "~/services/user-statistics.server";

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

function StatCard({ title, value, description, trend }: StatCardProps) {
  return (
    <div className="rounded-lg border border-gray-700 bg-gray-800 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium text-gray-400 text-sm">{title}</p>
          <p className="mt-1 font-bold text-2xl text-white">
            {value.toLocaleString()}
          </p>
          {description && (
            <p className="mt-1 text-gray-500 text-xs">{description}</p>
          )}
        </div>
        {trend && (
          <div
            className={`flex items-center text-sm ${trend.isPositive ? "text-green-400" : "text-red-400"}`}
          >
            <span className={`mr-1 ${trend.isPositive ? "↗" : "↘"}`}>
              {trend.isPositive ? "↗" : "↘"}
            </span>
            {trend.value}
          </div>
        )}
      </div>
    </div>
  );
}

interface UserStatisticsProps {
  statistics: UserStatistics;
}

export default function UserStatisticsComponent({
  statistics,
}: UserStatisticsProps) {
  return (
    <div className="space-y-6">
      {/* User Growth Stats */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          description="All registered users"
          title="Total Users"
          value={statistics.totalUsers}
        />
        <StatCard
          description="New registrations today"
          title="Today New Users"
          value={statistics.todayNewUsers}
        />
        <StatCard
          description="New registrations yesterday"
          title="Yesterday New Users"
          value={statistics.yesterdayNewUsers}
        />
        <StatCard
          description="New registrations day before yesterday"
          title="Day Before Yesterday"
          value={statistics.dayBeforeYesterdayNewUsers}
        />
      </div>

      {/* User Categories */}
      <div>
        <h3 className="mb-4 font-semibold text-lg text-white">
          User Categories
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <StatCard
            description="Individual users (non-business)"
            title="Creators"
            value={statistics.creatorsCount}
          />
          <StatCard
            description="Business users"
            title="Enterprises"
            value={statistics.enterprisesCount}
          />
        </div>
      </div>

      {/* Wallet Statistics */}
      <div>
        <h3 className="mb-4 font-semibold text-lg text-white">
          Wallet Address Statistics
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <StatCard
            description="Users with wallet addresses"
            title="Total Wallets"
            value={statistics.totalWalletAddresses}
          />
          <StatCard
            description="Logged in with wallet"
            title="Wallet Login"
            value={statistics.emailEqualsWallet}
          />
          <StatCard
            description="Creator accounts with bound wallets"
            title="Bound Wallets"
            value={statistics.emailNotEqualsWallet}
          />
        </div>
      </div>

      {/* Campaign Participation */}
      <div>
        <h3 className="mb-4 font-semibold text-lg text-white">
          Campaign Participation
        </h3>
        <div className="mb-4">
          <StatCard
            description="Unique users participating in campaigns"
            title="Total Campaign Participants"
            value={statistics.totalCampaignParticipants}
          />
        </div>

        {statistics.campaignParticipation.length > 0 ? (
          <div className="rounded-lg border border-gray-700 bg-gray-800">
            <div className="border-gray-700 border-b px-6 py-4">
              <h4 className="font-medium text-white">Campaign Breakdown</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-750">
                  <tr>
                    <th className="px-6 py-3 text-left font-medium text-gray-300 text-xs uppercase tracking-wide">
                      Campaign Name
                    </th>
                    <th className="px-6 py-3 text-left font-medium text-gray-300 text-xs uppercase tracking-wide">
                      Participants
                    </th>
                    <th className="px-6 py-3 text-left font-medium text-gray-300 text-xs uppercase tracking-wide">
                      Campaign ID
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700 bg-gray-800">
                  {statistics.campaignParticipation.map((campaign) => (
                    <tr className="hover:bg-gray-750" key={campaign.campaignId}>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-white">
                        {campaign.campaignName}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-semibold text-sm text-white">
                        {campaign.participantCount.toLocaleString()}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-mono text-gray-400 text-sm">
                        {campaign.campaignId}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="rounded-lg border border-gray-700 bg-gray-800 p-6">
            <p className="text-center text-gray-400">No campaigns found</p>
          </div>
        )}
      </div>
    </div>
  );
}
