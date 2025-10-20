interface AnalyticsCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

export default function AnalyticsCard({
  icon,
  title,
  value,
}: AnalyticsCardProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <div className="h-4 w-4 text-[#9D9D9D]">{icon}</div>
          <span className="text-[#9D9D9D] text-xs leading-tight md:text-sm">
            {title}
          </span>
        </div>
        <span className="font-bold text-2xl text-[#E2E2E2]">{value}</span>
      </div>
    </div>
  );
}
