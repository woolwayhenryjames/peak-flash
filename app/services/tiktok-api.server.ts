import { err, ok, type Result } from 'neverthrow';

export interface TikTokUserInfo {
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

interface TikHubApiResponse<T> {
  data: T;
  code: number;
  message: string;
}

/**
 * Get user's TikTok account information including stats
 */
export async function getUserInfo(
  username: string
): Promise<Result<TikTokUserInfo, string>> {
  try {
    const response = await await fetch(
      process.env.TIKHUB_BASE_URL +
        '/api/v1/tiktok/app/v3/handler_user_profile?unique_id=' +
        encodeURIComponent(username),
      {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${process.env.TIKHUB_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      console.error('TikTok API error:', response.status, response.statusText);
      return err('Failed to fetch TikTok user info');
    }

    const result: TikHubApiResponse<{ user: TikTokUserInfo }> =
      await response.json();

    console.log('TikTok API response:', result);
    if (result.code !== 200) {
      console.error('TikTok API error:', result.message);
      return err(result.message);
    }

    return ok(result.data.user);
  } catch (error) {
    console.error('Error fetching TikTok user info:', error);
    return err('Failed to fetch TikTok user info');
  }
}
