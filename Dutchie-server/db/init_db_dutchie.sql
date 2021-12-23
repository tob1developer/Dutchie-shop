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
);

CREATE TABLE USER (
      USER_ID   INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
      FirstName    VARCHAR(40)                    NULL,
      LastName     VARCHAR(40)                    NULL,
      Phone        VARCHAR(20)                    NULL,
      Address      VARCHAR(100)                   NULL,
      City         VARCHAR(100)                    NULL,
      FullName     VARCHAR(100)                   NULL,
      Email        VARCHAR(100)                   NULL,
      PhoneNumber  VARCHAR(100)                   NULL,
      CreationDate VARCHAR(100)                   NULL,
      CookieName   VARCHAR(100)                    NOT NULL
);

CREATE TABLE SHIPPING_METHOD (
      SHIPPING_ID   INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
      NameShippingMethod    VARCHAR(100)                    NULL,
      Price         VARCHAR(100)                    NULL,
      TimeShip      INT                             NULL
);



iềnENGINE = INNODB;

/* INSERT DATA */
INSERT INTO SHOES ( NAME, DESCRIPTION, CreationDate, PATH_IMAGE_REVIEW, PRICE)
VALUES ('BASAS SUEDE - LOW TOP - BLACK', 'BASAS SUEDE - LOW TOP - BLACK', '2011-12-18 13:17:17', 'test path','500.000 VND');

INSERT INTO SHIPPING_METHOD ( NameShippingMethod, Price, TimeShip)
VALUES ('Giao hàng tiêu chuẩn','100.100 VND',7);
INSERT INTO SHIPPING_METHOD ( NameShippingMethod, Price, TimeShip)
VALUES ('Giao hàng nhanh','150.100 VND',1);



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
