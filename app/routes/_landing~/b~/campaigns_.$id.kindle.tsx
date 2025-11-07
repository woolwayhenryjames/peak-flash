import KindleScoresPage from "~/components/KindleScoresPage";
import bg from "~/routes/u~/leaderboard/assets/bg.avif";
import { getCampaignUsersByUserRank } from "~/services/campaign.server";
import type { Route } from "./+types/campaigns_.$id.kindle";

export async function loader({ request, params }: Route.LoaderArgs) {
  if (!params.id) {
    throw new Response("Campaign ID is required", { status: 400 });
  }

  const url = new URL(request.url);
  const page = Number.parseInt(url.searchParams.get("page") || "1", 10);

  // Get users who joined this campaign, ordered by their user rank
  const leaderboardData = await getCampaignUsersByUserRank(params.id, page, 10);

  return {
    users: leaderboardData.campaignUsers.map((cu) => cu.user),
    pagination: leaderboardData.pagination,
  };
}

export default function Leaderboard({ loaderData }: Route.ComponentProps) {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(180deg, #0B0B1D 0%, #141419 30.78%, #08080F 71.63%, #0D0D1A 100%)",
      }}
    >
      <div
        className="flex h-32 w-full items-center gap-3 bg-contain bg-right bg-no-repeat pl-10 md:h-62"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container mx-auto font-normal text-2xl text-[#f2edea] md:text-5xl">
          KINDLE Score leaderboard
        </div>
      </div>
      <div className="container mx-auto my-9 flex items-center gap-2 max-md:mx-3 md:my-15">
        <svg
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>KINDLE Score Icon</title>
          <path
            d="M18.3984 4.00239C18.3991 3.94988 18.3894 3.89775 18.3699 3.84901C18.3503 3.80027 18.3213 3.7559 18.2845 3.71847C18.2476 3.68104 18.2037 3.65129 18.1553 3.63096C18.1069 3.61062 18.0549 3.60009 18.0024 3.59999H5.99839C5.78039 3.59999 5.60039 3.78079 5.60039 4.00399V11.166C5.80039 14.5436 8.60279 17.2 12.0004 17.2C15.3996 17.2 18.2 14.5424 18.39 11.1668L18.3984 4.00239ZM19.5904 11.2C19.382 15.2116 16.0632 18.4 12.0004 18.4C7.93719 18.4 4.61879 15.2116 4.40039 11.2V4.00399C4.40039 3.11999 5.11599 2.39999 5.99839 2.39999H18.0024C18.2126 2.4001 18.4208 2.44171 18.6149 2.52246C18.809 2.6032 18.9852 2.72148 19.1335 2.87051C19.2818 3.01954 19.3992 3.19639 19.479 3.3909C19.5588 3.58541 19.5993 3.79376 19.5984 4.00399L19.5904 11.2Z"
            fill="url(#paint0_linear_1209_7605)"
          />
          <path
            d="M21.1944 10.1652L21.1976 7.20121C21.1979 7.1485 21.1878 7.09625 21.1678 7.04749C21.1478 6.99872 21.1183 6.9544 21.0811 6.91709C21.0439 6.87978 20.9996 6.85023 20.9509 6.83013C20.9021 6.81003 20.8499 6.79979 20.7972 6.80001H19.5996V12.4004C20.0475 12.2138 20.4343 11.9055 20.7161 11.5105C20.998 11.1155 21.1637 10.6495 21.1944 10.1652ZM18.3996 5.60001H20.7972C21.0076 5.5998 21.216 5.64111 21.4104 5.72159C21.6048 5.80207 21.7814 5.92013 21.93 6.06899C22.0787 6.21786 22.1966 6.3946 22.2768 6.5891C22.357 6.78359 22.3981 6.99201 22.3976 7.20241L22.3944 10.2C22.2904 12.2056 20.6312 13.8 18.5996 13.8C18.5324 13.8 18.466 13.7984 18.3996 13.7948V5.60001ZM4.39761 5.60001L5.59761 6.80001H4.39761V5.60001ZM4.39761 6.80001H3.20041C3.14767 6.79974 3.0954 6.80994 3.04663 6.83001C2.99785 6.85009 2.95355 6.87964 2.91627 6.91695C2.879 6.95426 2.84949 6.9986 2.82947 7.04739C2.80944 7.09619 2.7993 7.14847 2.79961 7.20121L2.80281 10.1652C2.83357 10.6495 2.99924 11.1155 3.28108 11.5105C3.56292 11.9055 3.94969 12.2138 4.39761 12.4004V6.80001ZM5.59761 5.60001V13.7948C5.531 13.7983 5.46431 13.8 5.39761 13.8C3.36641 13.8 1.70681 12.2056 1.60281 10.2L1.59961 7.20241C1.59914 6.99198 1.64021 6.78353 1.72047 6.589C1.80073 6.39448 1.9186 6.21772 2.06732 6.06885C2.21604 5.91998 2.39269 5.80193 2.58713 5.72148C2.78157 5.64102 2.98998 5.59974 3.20041 5.60001H5.59761Z"
            fill="url(#paint1_linear_1209_7605)"
          />
          <path
            d="M11.5996 17.2H12.7996V21.4H11.5996V17.2Z"
            fill="url(#paint2_linear_1209_7605)"
          />
          <path
            d="M16.3996 20.4V21.6H7.59961V20.4H16.3996Z"
            fill="url(#paint3_linear_1209_7605)"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_1209_7605"
              x1="1.5231"
              x2="28.9312"
              y1="10.4"
              y2="10.4"
            >
              <stop stop-color="#6D7077" />
              <stop offset="0.363695" stop-color="#FEFEFE" />
              <stop offset="1" stop-color="#3C4041" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_1209_7605"
              x1="-2.33788"
              x2="35.1692"
              y1="9.70001"
              y2="9.70001"
            >
              <stop stop-color="#6D7077" />
              <stop offset="0.363695" stop-color="#FEFEFE" />
              <stop offset="1" stop-color="#3C4041" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint2_linear_1209_7605"
              x1="11.3724"
              x2="13.5365"
              y1="19.3"
              y2="19.3"
            >
              <stop stop-color="#6D7077" />
              <stop offset="0.363695" stop-color="#FEFEFE" />
              <stop offset="1" stop-color="#3C4041" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint3_linear_1209_7605"
              x1="5.93359"
              x2="21.8035"
              y1="21"
              y2="21"
            >
              <stop stop-color="#6D7077" />
              <stop offset="0.363695" stop-color="#FEFEFE" />
              <stop offset="1" stop-color="#3C4041" />
            </linearGradient>
          </defs>
        </svg>
        <div className="font-semibold text-white text-xl">
          KINDLE Score (Top 100)
        </div>
      </div>
      <KindleScoresPage loaderData={loaderData} uri="/leaderboard" />
    </div>
  );
}
