interface VideoCardProps {
  rank: string;
  title: string;
  creator: string;
  kindleScore: string;
  views: string;
  comments: string;
  shares: string;
}

export default function VideoCard({
  rank,
  title,
  creator,
  kindleScore,
  views,
  comments,
  shares,
}: VideoCardProps) {
  return (
    <div className="rounded-md border border-white/20 px-[19px] py-[12px]">
      <div className="flex gap-[6px]">
        <span className="font-medium text-base text-white">{rank}</span>
        <div className="flex gap-[23px]">
          <div className="relative h-[89px] w-[73px] rounded-[5px] bg-gray-600">
            <div className="absolute inset-0 flex items-center justify-center rounded-[5px] bg-black/70">
              <div className="flex items-center gap-[5px] rounded-[2px] bg-black/70 px-[6px] py-[4px]">
                <div
                  className="h-[10px] w-[10px] bg-white"
                  style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
                />
                <span className="font-light text-white text-xs">1.2k</span>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-[19px]">
            <div className="space-y-[18px]">
              <h5 className="font-medium text-sm text-white">{title}</h5>
              <p className="font-light text-[#ACACAC] text-xs">
                {creator} • KINDLE Score: {kindleScore}
              </p>
            </div>
            <div className="flex items-center gap-[4px]">
              <div className="flex items-center gap-[4px]">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white">
                  <svg
                    className="h-5 w-5 text-[#05050B]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <title>Views icon</title>
                    <path d="M10 4C5 4 1.73 7.61 0 12C1.73 16.39 5 20 10 20C15 20 18.27 16.39 20 12C18.27 7.61 15 4 10 4ZM10 17C7.24 17 5 14.76 5 12C5 9.24 7.24 7 10 7C12.76 7 15 9.24 15 12C15 14.76 12.76 17 10 17ZM10 9C8.34 9 7 10.34 7 12C7 13.66 8.34 15 10 15C11.66 15 13 13.66 13 12C13 10.34 11.66 9 10 9Z" />
                  </svg>
                </div>
                <span className="font-medium text-white text-xs">{views}</span>
              </div>
              <div className="flex items-center gap-[3px]">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-black/70">
                  <svg
                    className="h-[11px] w-[11px] text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <title>Comments icon</title>
                    <path d="M21.99 4C21.99 2.9 21.1 2 20 2H4C2.9 2 2 2.9 2 4V18C2 19.1 2.9 20 4 20H16L20 24L21.99 4Z" />
                  </svg>
                </div>
                <span className="font-medium text-white text-xs">
                  {comments}
                </span>
              </div>
              <div className="flex items-center gap-[5px]">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-black/70">
                  <svg
                    className="h-2 w-[11px] text-white"
                    fill="currentColor"
                    viewBox="0 0 11 8"
                  >
                    <title>Shares icon</title>
                    <path d="M0 8L11 4L0 0V8Z" />
                  </svg>
                </div>
                <span className="font-medium text-white text-xs">{shares}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
