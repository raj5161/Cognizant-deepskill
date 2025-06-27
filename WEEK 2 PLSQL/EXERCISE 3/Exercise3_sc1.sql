CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
  FOR rec IN (SELECT AccountID, Balance FROM SavingsAccounts) LOOP
    UPDATE SavingsAccounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountID = rec.AccountID;

    DBMS_OUTPUT.PUT_LINE('Interest applied to Account ID: ' || rec.AccountID);
  END LOOP;

  COMMIT;
END;
/
BEGIN
  ProcessMonthlyInterest;
END;
/


select * from savingsaccounts;