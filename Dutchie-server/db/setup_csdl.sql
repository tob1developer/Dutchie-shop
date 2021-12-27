/***CREATING ALL TABLES*/
CREATE TABLE SHOES (
                       SHOES_ID          INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
                       Name              VARCHAR(200)                    NULL,
                       Description       VARCHAR(200)                    NULL,
                       Price             INTEGER                         NULL,
                       Currency          VARCHAR(10)                     NULL,
                       Sex               VARCHAR(20)                     NULL,
                       Trending          INTEGER                         NULL,
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

/* INSERT DATA */

/*SHOES */
INSERT INTO SHOES ( Name, Description, Price,Currency, Sex,Trending,CurrentQuantity,PathImageReview)
VALUES ('Vintas Flannel - Low Top', 'Cement',500000,'VND','Nam',1,4, '1');

INSERT INTO SHOES ( Name, Description, Price,Currency, Sex,Trending,CurrentQuantity,PathImageReview)
VALUES ('Basas Bumper Gum EXT NE - Low Top', 'Offwhite/Gum',580000,'VND','Nam',1,7, '2');

INSERT INTO SHOES ( Name, Description, Price,Currency, Sex,Trending,CurrentQuantity,PathImageReview)
VALUES ('Basas Bumper Gum EXT NE - High Top', 'Offwhite/Gum',650000,'VND','Nam',1,11, '3');

INSERT INTO SHOES ( Name, Description, Price,Currency, Sex,Trending,CurrentQuantity,PathImageReview)
VALUES ('Basas Bumper Gum NE - Mule', 'Black/Gum',520000,'VND','Nam',0,2, '4');

INSERT INTO SHOES ( Name, Description, Price,Currency, Sex,Trending,CurrentQuantity,PathImageReview)
VALUES ('Basas Bumper Gum NE - Mule', 'Offwhite/Gum',520000,'VND','Nam',1,4, '5');

INSERT INTO SHOES ( Name, Description, Price,Currency, Sex,Trending,CurrentQuantity,PathImageReview)
VALUES ('Basas Bumper Gum NE - Mule', 'Black/Gum',520000,'VND','Nu',0,14, '6');

INSERT INTO SHOES ( Name, Description, Price,Currency, Sex,Trending,CurrentQuantity,PathImageReview)
VALUES ('Basas Bumper Gum NE - Mule', 'Offwhite/Gum',520000,'VND','Nu',0,4, '7');

INSERT INTO SHOES ( Name, Description, Price,Currency, Sex,Trending,CurrentQuantity,PathImageReview)
VALUES ('Basas Simple Life NE - Mule', 'Black',490000,'VND','Nu',0,4, '8');

INSERT INTO SHOES ( Name, Description, Price,Currency, Sex,Trending,CurrentQuantity,PathImageReview)
VALUES ('Basas Simple Life NE - Mule', 'White',490000,'VND','Nu',1,4, '9');

INSERT INTO SHOES ( Name, Description, Price,Currency, Sex,Trending,CurrentQuantity,PathImageReview)
VALUES ('Basas Hook N''Loop NE - Mule', 'Black',520000,'VND','Nam',1,4, '10');


/*INSERT GIAO HANG VAN CHUYEN*/
INSERT INTO SHIPPING_METHOD ( NameShippingMethod, Price, TimeShip)
VALUES ('Giao hàng tiêu chuẩn','100.100 VND',7);
INSERT INTO SHIPPING_METHOD ( NameShippingMethod, Price, TimeShip)
VALUES ('Giao hàng nhanh','150.100 VND',1);

DROP PROCEDURE IF EXISTS sp_GetDutchie;
DELIMITER //
CREATE PROCEDURE sp_GetDutchie()
BEGIN
SELECT * FROM SHOES;
END //
DELIMITER ;
/**Drop StoreProcedure**/
CALL sp_GetDutchie();


