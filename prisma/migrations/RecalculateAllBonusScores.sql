DELIMITER $$

CREATE PROCEDURE UpdateAllScores()
BEGIN
    DECLARE updated_users INT DEFAULT 0;
    DECLARE updated_campaigns INT DEFAULT 0;
    
    -- Step 1: Update User kindleScore from TikTok data
    UPDATE User u
    INNER JOIN tiktok_creator_score.users tcs_users 
        ON u.email = tcs_users.username
    SET u.kindleScore = tcs_users.account_total_score
    WHERE tcs_users.account_total_score IS NOT NULL;
    
    SET updated_users = ROW_COUNT();
    
    -- Step 2: Update CampaignUser baseScore and videoCount from TikTok keyword scores
    UPDATE CampaignUser cu
    INNER JOIN User u 
        ON cu.userId = u.id
    INNER JOIN tiktok_creator_score.users tcs_users 
        ON u.email = tcs_users.username
    INNER JOIN tiktok_creator_score.keyword_scores ks 
        ON tcs_users.id = ks.user_id
    SET 
        cu.baseScore = ks.total_score,
        cu.videoCount = JSON_LENGTH(ks.video_scores_json),
        cu.updatedAt = NOW()
    WHERE 
        ks.total_score IS NOT NULL;
    
    SET updated_campaigns = ROW_COUNT();
    
    -- Step 3: Recalculate all bonus scores based on invitation relationships
    UPDATE CampaignUser cu
    INNER JOIN User u ON cu.userId = u.id
    SET cu.bonusScore = (
        SELECT COALESCE(SUM(FLOOR(cu_invitee.baseScore * 0.1)), 0)
        FROM CampaignUser cu_invitee
        INNER JOIN User u_invitee ON cu_invitee.userId = u_invitee.id
        WHERE u_invitee.inviterId = u.id
        AND cu_invitee.campaignId = cu.campaignId
    );
    
    -- Step 4: Recalculate total scores after all updates
    UPDATE CampaignUser 
    SET score = baseScore + bonusScore;
    
    -- Log results
    SELECT 
        updated_users as users_updated,
        updated_campaigns as campaign_users_updated,
        NOW() as execution_time;
END$$

DELIMITER ;