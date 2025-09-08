-- Drop triggers if they exist (for re-running this file)
DROP TRIGGER IF EXISTS update_campaign_user_score_on_insert;
DROP TRIGGER IF EXISTS update_campaign_user_score_on_update;
DROP TRIGGER IF EXISTS update_inviter_bonus_on_score_change;

DELIMITER $$

-- Trigger 1: Automatically calculate total score (baseScore + bonusScore) on INSERT
CREATE TRIGGER update_campaign_user_score_on_insert
    BEFORE INSERT ON CampaignUser
    FOR EACH ROW
BEGIN
    SET NEW.score = NEW.baseScore + NEW.bonusScore;
END$$

-- Trigger 2: Automatically calculate total score (baseScore + bonusScore) on UPDATE
CREATE TRIGGER update_campaign_user_score_on_update
    BEFORE UPDATE ON CampaignUser
    FOR EACH ROW
BEGIN
    SET NEW.score = NEW.baseScore + NEW.bonusScore;
END$$

-- Trigger 3: Update inviter's bonus scores when invited user's score changes
CREATE TRIGGER update_inviter_bonus_on_score_change
    AFTER UPDATE ON CampaignUser
    FOR EACH ROW
BEGIN
    -- Only proceed if the score actually changed
    IF OLD.score != NEW.score THEN
        -- Update inviter's bonus score in the same campaign (if they participate)
        UPDATE CampaignUser cu
        INNER JOIN User u ON cu.userId = u.id
        INNER JOIN User invitee ON invitee.inviterId = u.id
        SET cu.bonusScore = (
            SELECT COALESCE(SUM(FLOOR(cu_invitee.score * 0.1)), 0)
            FROM CampaignUser cu_invitee
            INNER JOIN User u_invitee ON cu_invitee.userId = u_invitee.id
            WHERE u_invitee.inviterId = u.id
            AND cu_invitee.campaignId = cu.campaignId
        )
        WHERE invitee.id = NEW.userId
        AND cu.campaignId = NEW.campaignId;
    END IF;
END$$

DELIMITER ;

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
