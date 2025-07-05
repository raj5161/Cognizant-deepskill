ALTER SESSION SET CONTAINER = ORCLPDB;
CREATE USER ormlearn IDENTIFIED BY qwerty5161;
GRANT CONNECT, RESOURCE TO ormlearn;
CREATE TABLE country (
    code VARCHAR2(2) PRIMARY KEY,
    name VARCHAR2(50)
);

INSERT INTO country VALUES ('IN', 'India');
INSERT INTO country VALUES ('US', 'United States of America');
COMMIT;
select * from countr
