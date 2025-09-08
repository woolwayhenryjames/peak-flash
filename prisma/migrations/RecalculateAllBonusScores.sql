-- Create a stored procedure to recalculate all bonus scores (useful for initial setup)
DELIMITER $$

CREATE PROCEDURE RecalculateAllBonusScores()
BEGIN
    -- Update all bonus scores based on current invitation relationships
    UPDATE CampaignUser cu
    INNER JOIN User u ON cu.userId = u.id
    SET cu.bonusScore = (
        SELECT COALESCE(SUM(FLOOR(cu_invitee.score * 0.1)), 0)
        FROM CampaignUser cu_invitee
        INNER JOIN User u_invitee ON cu_invitee.userId = u_invitee.id
        WHERE u_invitee.inviterId = u.id
        AND cu_invitee.campaignId = cu.campaignId
    );
    
    -- Recalculate total scores after bonus update
    UPDATE CampaignUser 
    SET score = baseScore + bonusScore;
END$$

DELIMITER ;
