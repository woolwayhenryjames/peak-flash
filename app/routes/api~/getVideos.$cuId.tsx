import type { LoaderFunctionArgs } from 'react-router';
import { db } from '~/services/db.server';
import { logger } from '~/services/logger.server';

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
}

export interface AiScoreJson {
  keyword_score: number;
  originality_score: number;
  clarity_score: number;
  spam_score: number;
  promotion_score: number;
  total_score: number;
  analysis_details: string;
  media_urls?: {
    video_url: string;
    cover_url: string;
    dynamic_cover_url: string;
  };
}

export type GetVideosReturnedData = VideoScoreJson &
  Pick<AiScoreJson, 'media_urls'>;

export async function loader({ params }: LoaderFunctionArgs) {
  const cuId = params.cuId;
  if (!cuId) {
    throw new Response('Campaign User ID is required', { status: 400 });
  }

  try {
    // Find the corresponding TikTok creator scores for this CampaignUser
    // This matches the logic from UpdateAllScores Step 3
    const results: { video_scores_json: string; ai_scores_json: string }[] =
      await db.$queryRaw`
      SELECT
        ks.video_scores_json,
        ks.ai_scores_json
      FROM CampaignUser cu
      INNER JOIN User u 
        ON cu.userId = u.id
      INNER JOIN tiktok_creator_score.users tcs_users 
        ON u.email = tcs_users.username
      INNER JOIN tiktok_creator_score.keyword_scores ks 
        ON tcs_users.id = ks.user_id
      INNER JOIN Campaign c 
        ON cu.campaignId = c.id
      WHERE 
        cu.id = ${cuId}
        AND ks.total_score IS NOT NULL
        AND ks.total_score != 0
        AND (
          SELECT
            JSON_ARRAYAGG(jt1.item ORDER BY jt1.item)
          FROM
            JSON_TABLE(
              JSON_EXTRACT(c.joinRequirement, '$."Required Tags"'),
              '$[*]' COLUMNS (item VARCHAR(255) PATH '$')
            ) AS jt1
        ) = (
          -- Normalize and sort the keywords from the keyword_scores table
          SELECT
            JSON_ARRAYAGG(jt2.item ORDER BY jt2.item)
          FROM
            JSON_TABLE(
              -- Recreate the JSON array from the ' | ' separated string
              CONCAT(
                '["',
                REPLACE(ks.keyword, ' | ', '","'),
                '"]'
              ),
              '$[*]' COLUMNS (item VARCHAR(255) PATH '$')
            ) AS jt2
        )
    `;
    const jsonString = results[0]?.video_scores_json || '[]';
    const aiJsonString = results[0]?.ai_scores_json || '[]';

    // Parse the JSON strings to ensure they're valid JSON
    const parsedVideoScores = JSON.parse(jsonString) as VideoScoreJson[];
    const parsedAiScores = JSON.parse(aiJsonString) as Record<
      string,
      AiScoreJson
    >;

    // Merge the video scores with their corresponding AI scores
    const parsedData: GetVideosReturnedData[] = parsedVideoScores.map(
      (video) => ({
        ...video,
        media_urls: parsedAiScores[video.video_id]?.media_urls,
      })
    );

    // Return the parsed data
    return Response.json(parsedData);
  } catch (error) {
    logger.error('Error fetching TikTok creator scores:', error);
    return Response.json({ success: false, error }, { status: 500 });
  }
}
