package com.example.employeedemo;

import com.example.employeedemo.model.Employee;
import com.example.employeedemo.service.EmployeeService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class EmployeedemoApplication {

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(EmployeedemoApplication.class, args);
        EmployeeService service = context.getBean(EmployeeService.class);

        Employee emp = new Employee();
        emp.setName("Alice");
        emp.setDepartment("HR");
        emp.setSalary(55000.0);

        service.addEmployee(emp);
    }
}
