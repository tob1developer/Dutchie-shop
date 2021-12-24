/***CREATING ALL TABLES */

USE DB_DUTCHIE_V1;

-- Dang dung chung data base;
CREATE TABLE SHOES (
      SHOES_ID          INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
      Name              VARCHAR(200)                    NULL,
      Description       VARCHAR(200)                    NULL,
      Price             VARCHAR(200)                    NULL,
      Sex               VARCHAR(20)                     NULL,
      Trending          INTEGER                         NULL,
      CreationDate      DATETIME                        NULL,
      CurrentQuantity   INTEGER                         NOT NULL,
      PathImageReview   VARCHAR(200)                    NULL
);

CREATE TABLE USER (
      USER_ID   INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
      FirstName    VARCHAR(40)                     NULL,
      LastName     VARCHAR(40)                     NULL,
      Phone        VARCHAR(20)                     NULL,
      Address      VARCHAR(100)                    NULL,
      Email        VARCHAR(100)                    NULL,
      CreationDate VARCHAR(100)                    NULL,
      CookieName   VARCHAR(100)                    NOT NULL
);

CREATE TABLE SHIPPING_METHOD (
      SHIPPING_ID   INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
      NameShippingMethod    VARCHAR(100)               NULL,
      Price                 VARCHAR(100)               NULL,
      TimeShip              INT                        NULL
);


CREATE TABLE ODER (
      ODER_ID   INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
      ShippingMethod     INTEGER                   NULL,
      PaymentMethod      INTEGER                   NULL,
      CookieName         VARCHAR(100)              NULL
);

CREATE TABLE CART(
    CART_ID   INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    CookieName         VARCHAR(100)               NULL,
    UserId             INTEGER                    NULL,
    ShoesId            INTEGER                    NULL,
    Quaintly           INTEGER                    NULL
);


ENGINE = INNODB;

/* khoi tao data  */
INSERT INTO SHOES ( Name, Description, Price, Sex,Trending,CreationDate,CurrentQuantity,PathImageReview)
VALUES ('BASAS SUEDE - LOW TOP - BLACK', 'BASAS SUEDE - LOW TOP - BLACK','500.000 VND','Nam',1, '2011-12-18 13:17:17',4, 'test path');
INSERT INTO SHOES ( Name, Description, Price, Sex,Trending,CreationDate,CurrentQuantity,PathImageReview)
VALUES ('BASAS SUEDE - LOW TOP - BLUE', 'BASAS SUEDE - LOW TOP - BLUE','600.000 VND','Nu',1, '2011-12-18 13:17:17',10, 'test path');
INSERT INTO SHOES ( Name, Description, Price, Sex,Trending,CreationDate,CurrentQuantity,PathImageReview)
VALUES ('BASAS SUEDE - LOW TOP - CAK', 'BASAS SUEDE - LOW TOP - BLUE','700.000 VND','Nu',0, '2011-12-18 13:17:17',11, 'test path');
INSERT INTO SHOES ( Name, Description, Price, Sex,Trending,CreationDate,CurrentQuantity,PathImageReview)
VALUES ('BASAS SUEDE - LOW TOP - CAKd', 'BASAS SUEDE - LOW TOP - BLUEd','800.000 VND','Nu',0, '2011-12-18 13:17:17',11, 'test path');
/*khoi tao phuong thuc van chuyen */
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
