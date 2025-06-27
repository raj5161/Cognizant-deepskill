CREATE TABLE BankAccounts (
  AccountID   NUMBER PRIMARY KEY,
  CustomerID  NUMBER,
  Balance     NUMBER(12,2)
);
INSERT INTO BankAccounts VALUES (201, 1, 10000);
INSERT INTO BankAccounts VALUES (202, 1, 3000);  -- same customer, 2 accounts
INSERT INTO BankAccounts VALUES (203, 2, 8000);

select * from bankaccounts;