import type { Campaign } from ".prisma/main/client";
import { use } from "react";
import CampaignCard from "~/components/CampaignCard";

interface CampaignWithParticipation extends Campaign {
  participants: number;
}

export default function MyCampaigns({
  campaignsPromise = Promise.resolve([]),
}: {
  campaignsPromise: Promise<CampaignWithParticipation[]>;
}) {
  const campaigns = use(campaignsPromise);
  return (
    <div className="flex flex-1 flex-col">
      <div className="mb-9 h-px w-full bg-[#444d57]/40 md:hidden" />
      <div className="grid grid-cols-[auto_auto] gap-y-3 font-normal text-[#8a8f98] text-xs">
        <div className="flex items-center gap-1.5 font-semibold text-white text-xl">
          <svg
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Campaigns Icon</title>
            <path
              d="M17.5 6.12602C18.5609 6.12602 19.5783 6.54745 20.3284 7.2976C21.0786 8.04774 21.5 9.06516 21.5 10.126V17.126C21.5 18.1869 21.0786 19.2043 20.3284 19.9545C19.5783 20.7046 18.5609 21.126 17.5 21.126H6.5C5.43913 21.126 4.42172 20.7046 3.67157 19.9545C2.92143 19.2043 2.5 18.1869 2.5 17.126V10.126C2.5 9.06516 2.92143 8.04774 3.67157 7.2976C4.42172 6.54745 5.43913 6.12602 6.5 6.12602H17.5ZM17.5 7.87602H6.5C5.90326 7.87602 5.33097 8.11308 4.90901 8.53503C4.48705 8.95699 4.25 9.52929 4.25 10.126V17.126C4.25 17.7228 4.48705 18.2951 4.90901 18.717C5.33097 19.139 5.90326 19.376 6.5 19.376H17.5C18.0967 19.376 18.669 19.139 19.091 18.717C19.5129 18.2951 19.75 17.7228 19.75 17.126V10.126C19.75 9.52929 19.5129 8.95699 19.091 8.53503C18.669 8.11308 18.0967 7.87602 17.5 7.87602ZM12.625 14.501C12.8571 14.501 13.0796 14.5932 13.2437 14.7573C13.4078 14.9214 13.5 15.144 13.5 15.376C13.5 15.6081 13.4078 15.8306 13.2437 15.9947C13.0796 16.1588 12.8571 16.251 12.625 16.251H7.375C7.14294 16.251 6.92038 16.1588 6.75628 15.9947C6.59219 15.8306 6.5 15.6081 6.5 15.376C6.5 15.144 6.59219 14.9214 6.75628 14.7573C6.92038 14.5932 7.14294 14.501 7.375 14.501H12.625ZM16.625 11.001C16.8571 11.001 17.0796 11.0932 17.2437 11.2573C17.4078 11.4214 17.5 11.644 17.5 11.876C17.5 12.1081 17.4078 12.3306 17.2437 12.4947C17.0796 12.6588 16.8571 12.751 16.625 12.751H7.375C7.14294 12.751 6.92038 12.6588 6.75628 12.4947C6.59219 12.3306 6.5 12.1081 6.5 11.876C6.5 11.644 6.59219 11.4214 6.75628 11.2573C6.92038 11.0932 7.14294 11.001 7.375 11.001H16.625ZM17 2.87402C17.4876 2.87392 17.9584 3.05191 18.3239 3.37455C18.6894 3.69718 18.9245 4.14223 18.985 4.62602H5.015C5.07546 4.14223 5.31056 3.69718 5.6761 3.37455C6.04164 3.05191 6.51244 2.87392 7 2.87402H17Z"
              fill="#F5F6F6"
            />
          </svg>
          My Campaigns
        </div>
        {campaigns.length > 0 && (
          <div className="flex items-center justify-self-end">
            {campaigns.length} campaigns
            <div className="ml-1.5 inline-block size-1.5 bg-[#56FF8F]" />
          </div>
        )}
        <div className="col-span-2 my-2 hidden h-px w-full bg-[#444d57]/40 md:block" />
        {campaigns.length > 0 && (
          <div>Manage and track your active campaigns</div>
        )}
      </div>
      <div className="flex flex-1 flex-wrap items-center gap-x-5 gap-y-10 pt-14 pb-30 max-md:min-h-50">
        {/* Campaign list would go here */}
        {campaigns.length === 0 && (
          <div className="px-2 py-5 font-medium text-[#ababab] text-base max-md:border max-md:border-dashed">
            You haven't created any campaigns yet.
          </div>
        )}
        {campaigns.map((campaign) => (
          <div
            className="aspect-square shrink-0 rounded-xl border border-[#2D3338] pt-4 pl-4 max-md:w-full"
            key={campaign.id}
          >
            <CampaignCard campaign={campaign} type="detail" />
          </div>
        ))}
      </div>
    </div>
  );
}
