-- Enable event scheduler if not already enabled
SET GLOBAL event_scheduler = ON;

-- Create event to run the procedure every 30 minutes
DELIMITER $$

CREATE EVENT IF NOT EXISTS UpdateScoresEvent
ON SCHEDULE EVERY 30 MINUTE
STARTS NOW()
DO
BEGIN
    CALL UpdateAllScores();
END$$

DELIMITER ;

-- To check if event is running:
-- SHOW EVENTS;

-- To disable the event:
-- ALTER EVENT UpdateScoresEvent DISABLE;

-- To modify the schedule (e.g., every hour):
-- ALTER EVENT UpdateScoresEvent ON SCHEDULE EVERY 1 HOUR;