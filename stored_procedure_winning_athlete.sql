DELIMITER $$

CREATE DEFINER=`root`@`%` PROCEDURE `winning_athlete`()
BEGIN
    DECLARE done INT DEFAULT FALSE;
    DECLARE athleteName VARCHAR(255);
    DECLARE losingAthlete VARCHAR(255);
    DECLARE winningAthlete VARCHAR(255);
    DECLARE discipline VARCHAR(255);
	DECLARE athleteCursor CURSOR FOR
        SELECT a.Name
        FROM Athletes a
        WHERE a.Name NOT IN (
            SELECT DISTINCT mba.athlete_name
            FROM MedalsByAthlete mba
            WHERE mba.medal_type IN ('Gold Medal', 'Silver Medal', 'Bronze Medal')
        );
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;
    OPEN athleteCursor;
    athlete_loop: LOOP
        FETCH athleteCursor INTO athleteName;
        IF done THEN
            LEAVE athlete_loop;
        END IF;
		SELECT a.Name AS LosingAthlete, mba.athlete_name AS WinningAthlete, a.discipline 
        INTO losingAthlete, winningAthlete, discipline
        FROM Athletes a 
        LEFT JOIN (
            SELECT DISTINCT mba.discipline, mba.athlete_name 
            FROM MedalsByAthlete mba 
            WHERE mba.medal_type = 'Gold Medal'
        ) mba ON a.Discipline = mba.discipline 
        WHERE a.Name = athleteName;
		SELECT CONCAT(losingAthlete, ' lost to ', winningAthlete, ' in ', discipline) AS Result;
    END LOOP;
	CLOSE athleteCursor;
    
END
$$
DELIMITER ;
