DELIMITER $$

CREATE PROCEDURE UpdateUserVideos ()
BEGIN
-- Step 1: Upsert new + updated videos
INSERT INTO UserVideo (
  videoId, campaignUserId,
  createTime, description,
  viewCount, likeCount, commentCount, shareCount, collectCount,
  videoUrl, coverUrl,
  keywordScore, originalityScore, clarityScore, spamScore, promotionScore, totalScore,
  active
)
SELECT 
  v.video_id,
  cu.id AS campaignUserId,
  v.create_time,
  v.description,
  v.view_count, v.like_count, v.comment_count, v.share_count, v.collect_count,
  a.video_url, a.cover_url,
  a.keyword_score, a.originality_score, a.clarity_score, a.spam_score, a.promotion_score, a.total_score,
  TRUE
FROM tiktok_creator_score.keyword_scores ks
  JOIN CampaignUser cu ON cu.id = ks.campaign_user_id
JOIN JSON_TABLE(ks.video_scores_json, '$[*]' COLUMNS (
  video_id      VARCHAR(30) PATH '$.video_id',
  create_time   DATETIME    PATH '$.create_time',
  description   TEXT        PATH '$.desc',
  view_count    INT         PATH '$.statistics.view_count',
  like_count    INT         PATH '$.statistics.like_count',
  comment_count INT         PATH '$.statistics.comment_count',
  share_count   INT         PATH '$.statistics.share_count',
  collect_count INT         PATH '$.statistics.collect_count'
)) v
LEFT JOIN JSON_TABLE(JSON_KEYS(ks.ai_scores_json), '$[*]' COLUMNS (
  video_id VARCHAR(30) PATH '$'
)) jk ON v.video_id = jk.video_id
LEFT JOIN LATERAL (
  SELECT 
    JSON_UNQUOTE(JSON_EXTRACT(ks.ai_scores_json, CONCAT('$.', jk.video_id, '.media_urls.video_url'))) AS video_url,
    JSON_UNQUOTE(JSON_EXTRACT(ks.ai_scores_json, CONCAT('$.', jk.video_id, '.media_urls.cover_url'))) AS cover_url,
    JSON_UNQUOTE(JSON_EXTRACT(ks.ai_scores_json, CONCAT('$.', jk.video_id, '.keyword_score'))) AS keyword_score,
    JSON_UNQUOTE(JSON_EXTRACT(ks.ai_scores_json, CONCAT('$.', jk.video_id, '.originality_score'))) AS originality_score,
    JSON_UNQUOTE(JSON_EXTRACT(ks.ai_scores_json, CONCAT('$.', jk.video_id, '.clarity_score'))) AS clarity_score,
    JSON_UNQUOTE(JSON_EXTRACT(ks.ai_scores_json, CONCAT('$.', jk.video_id, '.spam_score'))) AS spam_score,
    JSON_UNQUOTE(JSON_EXTRACT(ks.ai_scores_json, CONCAT('$.', jk.video_id, '.promotion_score'))) AS promotion_score,
    JSON_UNQUOTE(JSON_EXTRACT(ks.ai_scores_json, CONCAT('$.', jk.video_id, '.total_score'))) AS total_score
) a
ON DUPLICATE KEY UPDATE
  createTime       = VALUES(createTime),
  description      = VALUES(description),
  viewCount        = VALUES(viewCount),
  likeCount        = VALUES(likeCount),
  commentCount     = VALUES(commentCount),
  shareCount       = VALUES(shareCount),
  collectCount     = VALUES(collectCount),
  videoUrl         = VALUES(videoUrl),
  coverUrl         = VALUES(coverUrl),
  keywordScore     = VALUES(keywordScore),
  originalityScore = VALUES(originalityScore),
  clarityScore     = VALUES(clarityScore),
  spamScore        = VALUES(spamScore),
  promotionScore   = VALUES(promotionScore),
  totalScore       = VALUES(totalScore),
  active           = TRUE;

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