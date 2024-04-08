drop database if exists onServe_db;
CREATE DATABASE onServe_db;
USE onServe_db;

CREATE TABLE tickets
(
ticket_id smallint NOT NULL AUTO_INCREMENT,
created datetime NOT NULL,
customer_no smallint NOT NULL,
appliance varchar(50) NOT NULL,
issue varchar(255) NOT NULL,
ticket_status varchar(25) NOT NULL,
assigned datetime DEFAULT NULL,
ticket_owner varchar(50) DEFAULT NULL,
closed datetime DEFAULT NULL,
notes varchar(255) DEFAULT NULL,
PRIMARY KEY (ticket_id)
);
INSERT INTO tickets VALUES (01,NOW(),11,'Dishwasher',"Won't turn on",'new',null,null,null,null);
INSERT INTO tickets VALUES (02,NOW(),12,'Refrigerator','Ice maker not working','new',null,null,null,null);
INSERT INTO tickets VALUES (03,NOW(),13,'Dryer','Not heating up','new',null,null,null,null);
INSERT INTO tickets VALUES (04,NOW(),14,'Oven',"Self-Cleaning not working",'new',null,null,null,null);

CREATE TABLE customers
(
customer_id smallint NOT NULL AUTO_INCREMENT,
created datetime NOT NULL,
ticket_no smallint NOT NULL,
lastname varchar(50) NOT NULL,
location int NOT NULL,
phone varchar(25) NOT NULL,
PRIMARY KEY (customer_id)
);
INSERT INTO customers VALUES (11,NOW(),01,'Dixon',98034,'(425)-337-8998');
INSERT INTO customers VALUES (12,NOW(),02,'Wilks',98037,'(425)-774-5678');
INSERT INTO customers VALUES (13,NOW(),03,'Neslon',98043,'(425)-778-5483');
INSERT INTO customers VALUES (14,NOW(),04,'Roberts',98026,'(425)-339-2986');

CREATE TABLE users
(
user_id smallint NOT NULL AUTO_INCREMENT,
created datetime NOT NULL DEFAULT NOW(),
username varchar(50) NOT NULL,
email varchar(255) NOT NULL,
password varchar(255) NOT NULL,
PRIMARY KEY (user_id)
);

INSERT INTO users VALUES (null,NOW(),'admin','admin@onserve.com',sha2('admin', 512));
