CREATE TABLE LOANS (
  LoanID       NUMBER PRIMARY KEY,
  CustomerID   NUMBER,
  InterestRate NUMBER(5,2),
  DueDate      DATE,
  FOREIGN KEY (CustomerID) REFERENCES CUSTOMERS(CustomerID)
);

-- Sample data
INSERT INTO LOANS (LoanID, CustomerID, InterestRate, DueDate)
VALUES (101, 1, 8.5, SYSDATE + 10);

INSERT INTO LOANS (LoanID, CustomerID, InterestRate, DueDate)
VALUES (102, 2, 9.0, SYSDATE + 40);

INSERT INTO LOANS (LoanID, CustomerID, InterestRate, DueDate)
VALUES (103, 3, 7.5, SYSDATE + 25);

INSERT INTO LOANS (LoanID, CustomerID, InterestRate, DueDate)
VALUES (104, 4, 8.0, SYSDATE + 5);

COMMIT;
select * from loans;