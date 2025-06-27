CREATE TABLE Customers (
  CustomerID   NUMBER PRIMARY KEY,
  Name         VARCHAR2(100),
  Age          NUMBER,
  Balance      NUMBER(12,2),
  IsVIP        CHAR(1) DEFAULT 'N'
);
INSERT INTO CUSTOMERS (CustomerID, Name, Age, Balance)
VALUES (1, 'Alice', 65, 12000);

INSERT INTO CUSTOMERS (CustomerID, Name, Age, Balance)
VALUES (2, 'Bob', 45, 8000);

INSERT INTO CUSTOMERS (CustomerID, Name, Age, Balance)
VALUES (3, 'Charlie', 70, 15000);

INSERT INTO CUSTOMERS (CustomerID, Name, Age, Balance)
VALUES (4, 'Diana', 30, 9500);

COMMIT;
select * from customers;