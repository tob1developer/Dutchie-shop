/***CREATING ALL TABLES */
USE DB_DUTCHIE_V1;

-- TODO: tao models shoes
-- Dang dung chung data base;
CREATE TABLE SHOES (
      SHOES_ID          INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
      NAME              VARCHAR(200)                    NULL,
      DESCRIPTION       VARCHAR(200)                    NULL,
      PRICE             VARCHAR(200)                    NULL,
      CreationDate      DATETIME                       NULL,
      PATH_IMAGE_REVIEW VARCHAR(200)                   NULL
)

-- CREATE TABLE USER (
--       USER_ID   INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
--       FirstName    VARCHAR(40)                    NULL,
--       LastName     VARCHAR(40)                    NULL,
--       Phone        VARCHAR(20)                    NULL,
--       Address      VARCHAR(100)                   NULL,
--       City         VARCHAR(30)                    NULL,
--       FullName     VARCHAR(100)                   NULL,
--       Email        VARCHAR(100)                   NULL,
--       PhoneNumber  VARCHAR(100)                   NULL,
--       CreationDate DATETIME                       NULL,
-- )

 ENGINE = INNODB;

/* INSERT DATA */
INSERT INTO SHOES ( NAME, DESCRIPTION, CreationDate, PATH_IMAGE_REVIEW, PRICE)
VALUES ('BASAS SUEDE - LOW TOP - BLACK', 'BASAS SUEDE - LOW TOP - BLACK', '2011-12-18 13:17:17', 'test path','500.000 VND');


# DROP PROCEDURE IF EXISTS sp_GetShoes;
# DELIMITER //
# CREATE PROCEDURE sp_GetShoes()
# BEGIN
# SELECT * FROM SHOES;
# END //
# DELIMITER ;
#
#
# /**Drop StoreProcedure**/
# CALL sp_GetShoes();
#
