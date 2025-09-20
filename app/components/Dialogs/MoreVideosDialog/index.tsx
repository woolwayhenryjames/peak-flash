import MobileBottomDialog from '~/components/Dialogs/MobileBottomDialog';

export interface VideoScoreJson {
  video_id: string;
  create_time: string;
  desc: string;
  statistics: {
    view_count: number;
    like_count: number;
    comment_count: number;
    share_count: number;
    collect_count: number;
  };
  ai_quality_score: {
    keyword_score: number;
    originality_score: number;
    clarity_score: number;
    spam_score: number;
    promotion_score: number;
    total_score: number;
  };
  engagement_rates: {
    like_rate: number;
    comment_rate: number;
    share_rate: number;
    save_rate: number;
  };
  media_urls?: {
    video_url: string;
    cover_url: string;
    dynamic_cover_url: string;
  };
}

export function MoreVideosDialog({
  show,
  setShow,
  videos,
}: {
  show: boolean;
  setShow: (show: boolean) => void;
  videos: VideoScoreJson[];
}) {
  return (
    <MobileBottomDialog setShow={setShow} show={show} title="Posted Videos">
      {/* Video List */}
      <div className="max-h-[50vh] overflow-y-auto pr-2">
        {videos.map((video) => (
          <a
            className="mb-3 flex h-33 w-full items-center gap-4.5 border border-white/20 px-4 py-3 last:mb-0"
            href={video.media_urls?.video_url}
            key={video.video_id}
            rel="noopener noreferrer"
            target="_blank"
          >
            {/* Thumbnail */}
            <div
              className="relative h-full w-[88px] flex-shrink-0 rounded-[5px] bg-center bg-cover bg-gray-800"
              style={{
                backgroundImage: `url(${video.media_urls?.cover_url})`,
              }}
            >
              <div className="absolute right-2 bottom-2 flex items-center gap-1 rounded bg-black/70 px-2 py-1">
                <svg className="h-3 w-3 fill-gray-300" viewBox="0 0 10 10">
                  <title>Views</title>
                  <polygon points="0,0 10,5 0,10" />
                </svg>
                <span className="text-[10px] text-gray-300">
                  {video.statistics.view_count}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex h-full flex-1 flex-col justify-between">
              {/* Title */}
              <h3 className="font-medium text-sm text-white leading-[1.5em]">
                {video.desc || 'Untitled Video'}
              </h3>

              {/* Metrics */}
              <div className="flex items-center gap-0.5">
                {/* Like Count */}
                <div className="flex items-center gap-[3px]">
                  <svg
                    className="size-5"
                    fill="none"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Likes</title>
                    <circle cx="10" cy="10" fill="#D9D9D9" r="10" />
                    <path
                      d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10.33 15C10.15 15.06 9.84 15.06 9.66 15C8.1 14.47 4.6 12.24 4.6 8.46C4.6 6.79 5.94 5.44 7.6 5.44C8.58 5.44 9.45 5.91 10 6.65C10.54 5.92 11.42 5.44 12.4 5.44C14.06 5.44 15.4 6.79 15.4 8.46C15.4 12.24 11.9 14.47 10.33 15Z"
                      fill="#05050B"
                    />
                  </svg>

                  <span className="font-medium text-[10px] text-white leading-[1.5em]">
                    {video.statistics.like_count}
                  </span>
                </div>

                {/* Comment Count */}
                <div className="flex items-center gap-[5px]">
                  <svg
                    className="size-5"
                    fill="none"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Comments</title>
                    <circle
                      cx="10"
                      cy="10"
                      fill="black"
                      fillOpacity="0.7"
                      r="10"
                    />
                    <path
                      d="M12.0162 4.44434H7.54467C5.60237 4.44434 4.44446 5.60167 4.44446 7.543V12.007C4.44446 13.9537 5.60237 15.111 7.54467 15.111H12.0109C13.9532 15.111 15.1111 13.9537 15.1111 12.0123V7.543C15.1164 5.60167 13.9585 4.44434 12.0162 4.44434ZM7.11245 10.4763C6.72826 10.4763 6.41344 10.1617 6.41344 9.77767C6.41344 9.39367 6.72826 9.079 7.11245 9.079C7.49665 9.079 7.81147 9.39367 7.81147 9.77767C7.81147 10.1617 7.49665 10.4763 7.11245 10.4763ZM9.78045 10.4763C9.39626 10.4763 9.08144 10.1617 9.08144 9.77767C9.08144 9.39367 9.39626 9.079 9.78045 9.079C10.1646 9.079 10.4795 9.39367 10.4795 9.77767C10.4795 10.1617 10.1646 10.4763 9.78045 10.4763ZM12.4484 10.4763C12.0643 10.4763 11.7494 10.1617 11.7494 9.77767C11.7494 9.39367 12.0643 9.079 12.4484 9.079C12.8326 9.079 13.1475 9.39367 13.1475 9.77767C13.1475 10.1617 12.8326 10.4763 12.4484 10.4763Z"
                      fill="#D9D9D9"
                    />
                  </svg>

                  <span className="font-medium text-[10px] text-white leading-[1.5em]">
                    {video.statistics.comment_count}
                  </span>
                </div>

                {/* Save Count */}
                <div className="flex items-center gap-[5px]">
                  <svg
                    className="size-5"
                    fill="none"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Saves</title>
                    <circle
                      cx="10"
                      cy="10"
                      fill="black"
                      fillOpacity="0.7"
                      r="10"
                    />
                    <path
                      d="M14.2222 5.3335V14.6668L10.2222 12.0002L6.22217 14.6668V5.3335H14.2222Z"
                      fill="#D9D9D9"
                    />
                  </svg>

                  <span className="font-medium text-[10px] text-white leading-[1.5em]">
                    {video.statistics.collect_count}
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </MobileBottomDialog>
  );
}
