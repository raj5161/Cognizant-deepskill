CREATE TABLE Employees (
  EmployeeID  NUMBER PRIMARY KEY,
  Name        VARCHAR2(100),
  Department  VARCHAR2(50),
  Salary      NUMBER(10,2)
);
INSERT INTO Employees VALUES (1, 'Alice', 'HR', 60000);
INSERT INTO Employees VALUES (2, 'Bob', 'HR', 50000);
INSERT INTO Employees VALUES (3, 'Charlie', 'IT', 70000);

column name format A20;
column department format a10
select * from employees;