package com.project.components.chainsandhotels.service;

import com.project.components.chainsandhotels.model.Employee;
import com.project.components.chainsandhotels.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeImpl implements EmployeeService{
    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public Employee saveEmployee(Employee employee){
        return employeeRepository.save(employee);
    }

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public List<Object[]> findSsnAndPassword() {
        return employeeRepository.findSsnAndPassword();
    }
}
