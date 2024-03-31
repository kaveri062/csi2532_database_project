package com.project.components.employee.service;

import com.project.components.employee.model.Employee;
import java.util.List;

public interface EmployeeService {
    public Employee saveEmployee(Employee employee);
    public List<Employee> getAllEmployees();
    public List<Object[]> findSsnAndPassword();
}