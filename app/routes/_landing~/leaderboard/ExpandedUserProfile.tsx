import { useEffect } from 'react';
import { useFetcher } from 'react-router';
import GlowContainer from '~/components/GlowContainer';

interface TikTokProfile {
  nickname: string;
  signature: string;
  follower_count: number;
  following_count: number;
  is_star: boolean;
  visible_videos_count: number;
  total_favorited: number;
  avatar_larger: {
    url_list: string[];
  };
  share_info: {
    share_url: string;
  };
}

interface ApiResponse {
  success: boolean;
  data?: TikTokProfile;
  error?: string;
}

const formatter = new Intl.NumberFormat('en', {
  notation: 'compact',
  compactDisplay: 'short',
});

export default function ExpandedUserProfile({
  user,
}: {
  user: { id: string; email: string };
}) {
  const fetcher = useFetcher<ApiResponse>();

  // biome-ignore lint/correctness/useExhaustiveDependencies: only want to run on userId change
  useEffect(() => {
    console.log(
      'Fetching TikTok profile for user.email:',
      user.email,
      fetcher.state,
      fetcher.data
    );
    if (user.email && fetcher.state === 'idle' && !fetcher.data) {
      fetcher.load(`/api/tiktok-profile/${user.email}`);
    }
  }, [user.email]);

  const isLoading = fetcher.state === 'loading';
  const profile = fetcher.data?.data;
  const hasError =
    fetcher.data?.error || (!profile && fetcher.data?.success === false);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-center p-8">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-white border-t-transparent" />
        </div>
      </div>
    );
  }

  if (hasError || !profile) {
    return (
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-center p-8">
          <p className="text-red-400 text-sm">
            {fetcher.data?.error || 'Failed to load TikTok profile'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 flex flex-col gap-8">
      {/* Profile Section */}
      <div className="flex items-center gap-3">
        {/* Avatar with verified badge */}
        <div className="relative">
          <div className="h-14 w-14 overflow-hidden rounded-full bg-gray-600">
            <img
              alt="User avatar"
              className="h-full w-full object-cover"
              src={profile.avatar_larger.url_list[0]}
            />
          </div>
          {/* Verified badge */}
          {profile.is_star && (
            <div className="-bottom-1 -right-1 absolute flex h-4 w-4 items-center justify-center rounded-full border border-white bg-gradient-to-b from-[#37edb9] to-[#4725df]">
              <svg
                className="h-2 w-2 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <title>Verified</title>
                <path
                  clipRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>

        {/* User info */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-0.5">
            <h3 className="font-medium text-base text-white tracking-tight">
              {profile.nickname}
            </h3>
            <p className="font-normal text-[#979797] text-[10px]">
              @{user.email}
            </p>
          </div>
          <p className="font-normal text-[#bdbdbd] text-xs">
            {profile.signature}
          </p>
        </div>
      </div>

      {/* Statistics Grid */}
      <div className="flex flex-col gap-5">
        {/* First row */}
        <div className="flex gap-4">
          <div className="flex-1 rounded-lg border border-gray-600/20 p-3">
            <div className="flex flex-col gap-2">
              <p className="bg-gradient-to-r from-[#7465ff] to-[#3bbdff] bg-clip-text font-medium text-transparent text-xl">
                {formatter.format(profile?.follower_count || 0)}
              </p>
              <p className="font-light text-[#a7a7a7] text-xs">Followers</p>
            </div>
          </div>
          <div className="flex-1 rounded-lg border border-gray-600/20 p-3">
            <div className="flex flex-col gap-2">
              <p className="bg-gradient-to-r from-[#7465ff] to-[#3bbdff] bg-clip-text font-medium text-transparent text-xl">
                {formatter.format(profile?.following_count || 0)}
              </p>
              <p className="font-light text-[#a7a7a7] text-xs">Following</p>
            </div>
          </div>
        </div>

        {/* Second row */}
        <div className="flex gap-4">
          <div className="flex-1 rounded-lg border border-gray-600/20 p-3">
            <div className="flex flex-col gap-2">
              <p className="bg-gradient-to-r from-[#7465ff] to-[#3bbdff] bg-clip-text font-medium text-transparent text-xl">
                {formatter.format(profile?.total_favorited || 0)}
              </p>
              <p className="font-light text-[#a7a7a7] text-xs">Likes</p>
            </div>
          </div>
          <div className="flex-1 rounded-lg border border-gray-600/20 p-3">
            <div className="flex flex-col gap-2">
              <p className="bg-gradient-to-r from-[#7465ff] to-[#3bbdff] bg-clip-text font-medium text-transparent text-xl">
                {formatter.format(profile?.visible_videos_count || 0)}
              </p>
              <p className="font-light text-[#a7a7a7] text-xs">Videos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Visit Profile Button */}
      <a
        className="ml-auto w-2/3"
        href={profile.share_info.share_url}
        rel="noopener noreferrer"
        target="_blank"
      >
        <GlowContainer className="rounded-lg px-8 py-3 font-normal text-sm text-white">
          Visit profile
        </GlowContainer>
      </a>
    </div>
  );
}
