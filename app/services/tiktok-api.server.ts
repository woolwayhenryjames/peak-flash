import { err, ok, type Result } from 'neverthrow';
import { auth } from '~/services/auth.server';

export interface TikTokUserInfo {
  open_id: string;
  union_id: string;
  avatar_large_url: string;
  display_name: string;
  bio_description: string;
  profile_deep_link: string;
  is_verified: boolean;
  follower_count: number;
  following_count: number;
  likes_count: number;
  video_count: number;
}

interface TikTokApiResponse<T> {
  data: T;
  error: {
    code: string;
    message: string;
    log_id: string;
  };
}

const BASE_URL = 'https://open.tiktokapis.com/v2';

/**
 * Get user's TikTok account information including stats
 */
export async function getUserInfo(
  userId: string
): Promise<Result<TikTokUserInfo, string>> {
  const { accessToken } = await auth.api.getAccessToken({
    body: {
      providerId: 'tiktok', // or any other provider id
      userId,
    },
  });

  try {
    const response = await fetch(
      `${BASE_URL}/user/info/?fields=${[
        'open_id',
        'union_id',
        'avatar_large_url',
        'display_name',
        'bio_description',
        'profile_deep_link',
        'is_verified',
        'follower_count',
        'following_count',
        'likes_count',
        'video_count',
      ].join(',')}}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      console.error('TikTok API error:', response.status, response.statusText);
      return err('Failed to fetch TikTok user info');
    }

    const result: TikTokApiResponse<{ user: TikTokUserInfo }> =
      await response.json();

    if (result.error.code !== 'ok') {
      console.error('TikTok API error:', result.error);
      return err(result.error.message);
    }

    return ok(result.data.user);
  } catch (error) {
    console.error('Error fetching TikTok user info:', error);
    return err('Failed to fetch TikTok user info');
  }
}
