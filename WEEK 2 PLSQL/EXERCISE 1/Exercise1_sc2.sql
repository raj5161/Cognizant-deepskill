BEGIN
  FOR rec IN (
    SELECT CustomerID FROM Customers
    WHERE Balance > 10000
  ) LOOP
    UPDATE Customers
    SET IsVIP = 'Y'
    WHERE CustomerID = rec.CustomerID;

    DBMS_OUTPUT.PUT_LINE('Promoted Customer ID ' || rec.CustomerID || ' to VIP.');
  END LOOP;

  COMMIT;
END;
/
COLUMN NAME FORMAT A20;
COLUMN ISVIP FORMAT A5;
select * from customers;