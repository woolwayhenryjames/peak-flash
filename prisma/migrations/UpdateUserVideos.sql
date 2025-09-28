DELIMITER $$

CREATE PROCEDURE UpdateUserVideos ()
BEGIN
-- Step 1: Upsert new + updated videos
INSERT INTO `UserVideo` (
  `videoId`, `campaignUserId`, `createTime`, `description`,
  `viewCount`, `likeCount`, `commentCount`, `shareCount`, `collectCount`,
  `videoUrl`, `coverUrl`,
  `keywordScore`, `originalityScore`, `clarityScore`, `spamScore`, `promotionScore`, `totalScore`,
  `active`
)
SELECT
  v.video_id,
  cu.id AS campaignUserId,
  -- parse ISO timestamp like "2025-09-20T05:03:01"
  STR_TO_DATE(v.create_time, '%Y-%m-%dT%H:%i:%s') AS createTime,
  v.description,
  COALESCE(v.view_count,0) AS viewCount,
  COALESCE(v.like_count,0) AS likeCount,
  COALESCE(v.comment_count,0) AS commentCount,
  COALESCE(v.share_count,0) AS shareCount,
  COALESCE(v.collect_count,0) AS collectCount,
  -- pull media URLs from ai_scores_json keyed by video_id
  JSON_UNQUOTE(JSON_EXTRACT(ks.ai_scores_json, CONCAT('$.', v.video_id, '.media_urls.video_url'))) AS videoUrl,
  JSON_UNQUOTE(JSON_EXTRACT(ks.ai_scores_json, CONCAT('$.', v.video_id, '.media_urls.cover_url'))) AS coverUrl,
  CAST(JSON_UNQUOTE(JSON_EXTRACT(ks.ai_scores_json, CONCAT('$.', v.video_id, '.keyword_score'))) AS DECIMAL(7,2))        AS keywordScore,
  CAST(JSON_UNQUOTE(JSON_EXTRACT(ks.ai_scores_json, CONCAT('$.', v.video_id, '.originality_score'))) AS DECIMAL(7,2))    AS originalityScore,
  CAST(JSON_UNQUOTE(JSON_EXTRACT(ks.ai_scores_json, CONCAT('$.', v.video_id, '.clarity_score'))) AS DECIMAL(7,2))        AS clarityScore,
  CAST(JSON_UNQUOTE(JSON_EXTRACT(ks.ai_scores_json, CONCAT('$.', v.video_id, '.spam_score'))) AS DECIMAL(7,2))           AS spamScore,
  CAST(JSON_UNQUOTE(JSON_EXTRACT(ks.ai_scores_json, CONCAT('$.', v.video_id, '.promotion_score'))) AS DECIMAL(7,2))     AS promotionScore,
  CAST(JSON_UNQUOTE(JSON_EXTRACT(ks.ai_scores_json, CONCAT('$.', v.video_id, '.total_score'))) AS DECIMAL(9,2))         AS totalScore,
  TRUE AS active
FROM tiktok_creator_score.keyword_scores ks
JOIN CampaignUser cu 
INNER JOIN Campaign c 
    ON cu.campaignId = c.id
    ON (
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
-- explode the array of video objects
JOIN JSON_TABLE(
  ks.video_scores_json,
  '$[*]' COLUMNS (
    video_id      VARCHAR(64) PATH '$.video_id',
    create_time   VARCHAR(30) PATH '$.create_time',
    description   TEXT        PATH '$.desc',
    view_count    INT         PATH '$.statistics.view_count',
    like_count    INT         PATH '$.statistics.like_count',
    comment_count INT         PATH '$.statistics.comment_count',
    share_count   INT         PATH '$.statistics.share_count',
    collect_count INT         PATH '$.statistics.collect_count'
  )
) AS v
ON 1=1
ON DUPLICATE KEY UPDATE
  `createTime`       = VALUES(`createTime`),
  `description`      = VALUES(`description`),
  `viewCount`        = VALUES(`viewCount`),
  `likeCount`        = VALUES(`likeCount`),
  `commentCount`     = VALUES(`commentCount`),
  `shareCount`       = VALUES(`shareCount`),
  `collectCount`     = VALUES(`collectCount`),
  `videoUrl`         = VALUES(`videoUrl`),
  `coverUrl`         = VALUES(`coverUrl`),
  `keywordScore`     = VALUES(`keywordScore`),
  `originalityScore` = VALUES(`originalityScore`),
  `clarityScore`     = VALUES(`clarityScore`),
  `spamScore`        = VALUES(`spamScore`),
  `promotionScore`   = VALUES(`promotionScore`),
  `totalScore`       = VALUES(`totalScore`),
  `active`           = VALUES(`active`);

-- Step 2: Mark missing videos as inactive
UPDATE UserVideo uv
LEFT JOIN (
  SELECT JSON_UNQUOTE(JSON_EXTRACT(v.value, '$.video_id')) AS video_id
  FROM tiktok_creator_score.keyword_scores ks,
    JSON_TABLE(ks.video_scores_json, '$[*]' COLUMNS (value JSON PATH '$')) v
) current_videos
ON uv.videoId = current_videos.video_id
SET uv.active = FALSE
WHERE current_videos.video_id IS NULL;
END$$
DELIMITER ;