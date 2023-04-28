DELIMITER $$
CREATE TRIGGER log_fact_delete
BEFORE DELETE ON AthleteFacts
FOR EACH ROW
BEGIN
    DECLARE last_log_type VARCHAR(255);
    
    SELECT log_type INTO last_log_type
    FROM fact_logs
    WHERE athlete_name = OLD.AthleteName AND fact_content = OLD.Content
    ORDER BY log_timestamp DESC
    LIMIT 1;
    
    IF last_log_type = 'INSERT' THEN
        DELETE FROM fact_logs
        WHERE athlete_name = OLD.AthleteName AND fact_content = OLD.Content AND log_type = 'INSERT'
        ORDER BY log_timestamp DESC
        LIMIT 1;
    ELSE
        INSERT INTO fact_logs (log_type, athlete_name, fact_content, user_id)
        VALUES ('DELETE', OLD.AthleteName, OLD.Content, OLD.UserId);
    END IF;
END$$
DELIMITER ;
