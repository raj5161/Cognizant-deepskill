CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
  dept_name IN VARCHAR2,
  bonus_pct IN NUMBER
) AS
BEGIN
  FOR rec IN (
    SELECT EmployeeID, Name, Salary
    FROM Employees
    WHERE Department = dept_name
  ) LOOP
    -- Store old salary
    DECLARE
      old_salary NUMBER := rec.Salary;
      new_salary NUMBER;
    BEGIN
      -- Update salary
      UPDATE Employees
      SET Salary = Salary + (Salary * bonus_pct / 100)
      WHERE EmployeeID = rec.EmployeeID;

      -- Fetch new salary
      SELECT Salary INTO new_salary
      FROM Employees
      WHERE EmployeeID = rec.EmployeeID;

      -- Print details
      DBMS_OUTPUT.PUT_LINE('Employee: ' || rec.Name ||
                           ' | Previous Salary: ' || old_salary ||
                           ' | New Salary: ' || new_salary);
    END;
  END LOOP;

  DBMS_OUTPUT.PUT_LINE('Bonuses updated for department: ' || dept_name);
  COMMIT;
END;
/
SET SERVEROUTPUT ON;

BEGIN
  UpdateEmployeeBonus('HR', 10); -- Apply 10% bonus to HR dept
END;
/
