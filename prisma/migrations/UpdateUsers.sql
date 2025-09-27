DELIMITER $$

CREATE PROCEDURE UpdateUsers ()
BEGIN
  DECLARE updated_users INT DEFAULT 0;
  
  -- Step 1: Update User kindleScore from TikTok data
  UPDATE User u
  INNER JOIN tiktok_creator_score.users tcs_users 
    ON u.email = tcs_users.username
  SET u.kindleScore = tcs_users.account_total_score
  WHERE tcs_users.account_total_score IS NOT NULL;
  
  SET updated_users = ROW_COUNT();
  
  -- Step 2: Recalculate user ranks based on updated scores
  UPDATE User u
  JOIN (
    SELECT id, ROW_NUMBER() OVER (ORDER BY kindleScore DESC, createdAt ASC) AS r
    FROM User
  ) ranked ON u.id = ranked.id
  SET u.rank = ranked.r;
  
  -- Log results
  SELECT 
    updated_users as users_updated,
    NOW() as execution_time;
END$$
DELIMITER ;