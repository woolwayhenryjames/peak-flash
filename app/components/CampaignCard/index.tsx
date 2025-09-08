import type { Campaign } from '@prisma/client';
import { Link } from 'react-router';
import { cn } from '~/lib/utils';
import GlowContainer from '../GlowContainer';

interface CampaignWithParticipation extends Campaign {
  isParticipating: boolean;
  userRank?: number | null;
  // Display property not in the base Campaign model
  participants: string;
}

interface CampaignCardProps extends CampaignWithParticipation {
  className?: string;
}

const statusConfig = {
  active: {
    label: 'Active',
    bgColor: 'bg-[#68fff4]',
  },
  'ending-soon': {
    label: 'Ending soon',
    bgColor: 'bg-[#ffa444]',
  },
  new: {
    label: 'New',
    bgColor: 'bg-[#7e47ff]',
  },
  ended: {
    label: 'Ended',
    bgColor: 'bg-[#ff8168]',
  },
} as const;

export default function CampaignCard({
  id,
  name,
  description,
  image,
  poolSize,
  participants,
  userRank,
  endDate,
  startDate,
  className,
}: CampaignCardProps) {
  const { status, daysLeftText } = getRemainingDays(startDate, endDate);
  const statusStyle = statusConfig[status];

  return (
    <div className={cn('w-full max-w-sm', className)}>
      {/* Card Container with Gradient Border */}
      <div className="rounded-xl border border-[#2D3338] p-6 md:p-7">
        {/* Inner Container */}
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Header Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex min-w-0 flex-1 flex-col gap-3">
                {/* Title and Logo */}
                <div className="flex items-center gap-2">
                  {image && (
                    <img
                      alt={`${name} logo`}
                      className="size-8 object-cover"
                      src={image}
                    />
                  )}
                  <div className="min-w-0 flex-1">
                    <h3 className="white-gradient-text truncate font-medium text-xl leading-tight">
                      {name}
                    </h3>
                  </div>
                </div>
                {/* Description */}
                <p className="text-white text-xs leading-relaxed">
                  {description}
                </p>
              </div>
              {/* Status Badge */}
              <div className="flex-shrink-0">
                <div
                  className={cn(
                    'min-w-18 rounded-xl px-2 py-1 text-center font-normal text-[#010101] text-sm',
                    statusStyle.bgColor
                  )}
                >
                  {statusStyle.label}
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-4">
              {/* Token Pool */}
              <div className="flex flex-col gap-2 rounded-lg border border-[#9c9c9c]/20 p-3">
                <div className="bg-linear-[69.39deg] from-[#694AFF] to-[#69D7FF] bg-clip-text font-medium text-transparent text-xl leading-tight">
                  {poolSize.toLocaleString()}
                </div>
                <div className="font-light text-[#A7A7A7] text-xs leading-relaxed">
                  Token Pool
                </div>
              </div>

              {/* Participants */}
              <div className="flex flex-col gap-2 rounded-lg border border-[#9c9c9c]/20 p-3">
                <div className="bg-linear-[69.39deg] from-[#694AFF] to-[#69D7FF] bg-clip-text font-medium text-transparent text-xl leading-tight">
                  {participants}
                </div>
                <div className="font-light text-[#A7A7A7] text-xs leading-relaxed">
                  Participants
                </div>
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <div className="flex flex-col gap-4">
            {/* Days Left and Rank */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.4}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Clock icon</title>
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <span className="text-white text-xs leading-relaxed">
                  {daysLeftText}
                </span>
              </div>

              {/* Rank Badge */}
              <GlowContainer className="w-fit rounded-md py-1 text-white text-xs">
                #{userRank}&nbsp;&gt;
              </GlowContainer>
            </div>

            {/* View Details Button */}
            <Link to={`/campaigns/${id}`}>
              <GlowContainer className="text-sm text-white">
                View Details
              </GlowContainer>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function getRemainingDays(startDate: Date, endDate: Date) {
  // Calculate days left and status based on endDate
  const now = new Date();
  const timeDiff = endDate.getTime() - now.getTime();
  const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));

  let status: 'active' | 'ending-soon' | 'new' | 'ended';
  if (daysLeft <= 0) {
    status = 'ended';
  } else if (daysLeft <= 3) {
    status = 'ending-soon';
  } else if (now.getTime() - startDate.getTime() <= 7 * 24 * 60 * 60 * 1000) {
    status = 'new'; // New if started within last 7 days
  } else {
    status = 'active';
  }

  let daysLeftText: string;
  if (daysLeft <= 0) {
    daysLeftText = 'Ended';
  } else if (daysLeft === 1) {
    daysLeftText = '1 day left';
  } else {
    daysLeftText = `${daysLeft} days left`;
  }
  return { status, daysLeftText };
}
