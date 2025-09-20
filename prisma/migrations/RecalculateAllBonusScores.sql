DELIMITER $$

CREATE PROCEDURE UpdateAllScores ()
BEGIN
    DECLARE updated_users INT DEFAULT 0;
    DECLARE updated_campaigns INT DEFAULT 0;
    DECLARE created_campaigns INT DEFAULT 0;
    
    -- Step 1: Update User kindleScore from TikTok data
    UPDATE User u
    INNER JOIN tiktok_creator_score.users tcs_users 
        ON u.email = tcs_users.username
    SET u.kindleScore = tcs_users.account_total_score
    WHERE tcs_users.account_total_score IS NOT NULL;
    
    SET updated_users = ROW_COUNT();
    
    -- Step 2: Create missing CampaignUser records based on keyword matches
    INSERT INTO CampaignUser (userId, campaignId, baseScore, videoCount, joinedAt, createdAt, updatedAt)
    SELECT DISTINCT 
        u.id as userId,
        c.id as campaignId,
        ks.total_score as baseScore,
        JSON_LENGTH(ks.video_scores_json) as videoCount,
        NOW() as joinedAt,
        NOW() as createdAt,
        NOW() as updatedAt
    FROM User u
    INNER JOIN tiktok_creator_score.users tcs_users 
        ON u.email = tcs_users.username
    INNER JOIN tiktok_creator_score.keyword_scores ks 
        ON tcs_users.id = ks.user_id
    INNER JOIN Campaign c ON (
        -- Check if any tag from Campaign.joinRequirement exists in keyword_scores.keyword
        (
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
    )
    LEFT JOIN CampaignUser existing_cu 
        ON existing_cu.userId = u.id AND existing_cu.campaignId = c.id
    WHERE 
        ks.total_score IS NOT NULL
				AND ks.total_score != 0
        AND existing_cu.id IS NULL; -- Only insert if CampaignUser doesn't exist
        
    SET created_campaigns = ROW_COUNT();
    
    -- Step 3: Update existing CampaignUser baseScore and videoCount from TikTok keyword scores
    UPDATE CampaignUser cu
    INNER JOIN User u 
        ON cu.userId = u.id
    INNER JOIN tiktok_creator_score.users tcs_users 
        ON u.email = tcs_users.username
    INNER JOIN tiktok_creator_score.keyword_scores ks 
        ON tcs_users.id = ks.user_id
    INNER JOIN Campaign c 
        ON cu.campaignId = c.id
    SET 
        cu.baseScore = ks.total_score,
        cu.videoCount = JSON_LENGTH(ks.video_scores_json),
        cu.updatedAt = NOW()
    WHERE 
        ks.total_score IS NOT NULL
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
    );
    
    SET updated_campaigns = ROW_COUNT();
    
    -- Step 4: Recalculate all bonus scores based on invitation relationships
    UPDATE CampaignUser cu
    INNER JOIN User u ON cu.userId = u.id
    SET cu.bonusScore = (
        SELECT COALESCE(SUM(ROUND(cu_invitee.baseScore * 0.1, 2)), 0)
        FROM CampaignUser cu_invitee
        INNER JOIN User u_invitee ON cu_invitee.userId = u_invitee.id
        WHERE u_invitee.inviterId = u.id
        AND cu_invitee.campaignId = cu.campaignId
    );
    
    -- Step 5: Recalculate total scores after all updates
    UPDATE CampaignUser 
    SET score = baseScore + bonusScore;
    
    -- Log results
    SELECT 
        updated_users as users_updated,
        updated_campaigns as campaign_users_updated,
        created_campaigns as campaign_users_created,
        NOW() as execution_time;
END$$
DELIMITER ;