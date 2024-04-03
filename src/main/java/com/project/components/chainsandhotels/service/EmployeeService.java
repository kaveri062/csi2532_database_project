package com.project.components.chainsandhotels.service;

import com.project.components.chainsandhotels.model.Employee;
import java.util.List;

public interface EmployeeService {
    public Employee saveEmployee(Employee employee);
    public List<Employee> getAllEmployees();
    public List<Object[]> findSsnAndPassword();
}