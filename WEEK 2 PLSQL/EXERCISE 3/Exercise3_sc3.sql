CREATE OR REPLACE PROCEDURE TransferFunds(
  from_acct IN NUMBER,
  to_acct IN NUMBER,
  amount IN NUMBER
) AS
  insufficient_balance EXCEPTION;
  curr_balance NUMBER;
BEGIN
  -- Check balance
  SELECT Balance INTO curr_balance FROM BankAccounts WHERE AccountID = from_acct FOR UPDATE;

  IF curr_balance < amount THEN
    RAISE insufficient_balance;
  END IF;

  -- Deduct from source
  UPDATE BankAccounts
  SET Balance = Balance - amount
  WHERE AccountID = from_acct;

  -- Add to destination
  UPDATE BankAccounts
  SET Balance = Balance + amount
  WHERE AccountID = to_acct;

  DBMS_OUTPUT.PUT_LINE('Transferred ' || amount || ' from ' || from_acct || ' to ' || to_acct);

  COMMIT;

EXCEPTION
  WHEN insufficient_balance THEN
    DBMS_OUTPUT.PUT_LINE('Transfer failed: Insufficient balance in account ' || from_acct);
    ROLLBACK;
  WHEN NO_DATA_FOUND THEN
    DBMS_OUTPUT.PUT_LINE('Transfer failed: One or both accounts not found.');
    ROLLBACK;
END;
/
BEGIN
  TransferFunds(201, 202, 2000);
END;
/
select * from savingsaccounts;