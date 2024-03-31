package com.project.components.employee.controller;

import com.project.components.employee.model.Employee;
import com.project.components.employee.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;



@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/employees")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    //adds employee to database
    @PostMapping("/add")
    public String add(@RequestBody Employee employee){
        employeeService.saveEmployee(employee);
        return "user is added";
    }

    //gets the whole table
    @GetMapping("/getAll")
    public List<Employee> findAllEmployees(){
        return employeeService.getAllEmployees();
    }


    //checks if employee info is correct
    @PostMapping("/authenticate")
    public String authenticate(@RequestBody SsnAndPasswordRequest ssnAndPasswordRequest) {
        List<Object[]> ssnAndPasswordList = employeeService.findSsnAndPassword();

        for (Object[] entry : ssnAndPasswordList) {
            String storedSsn = Objects.toString(entry[0], "");
            String storedPassword = Objects.toString(entry[1], "");

            if (ssnAndPasswordRequest.getSsn().equals(storedSsn)) {
                if (ssnAndPasswordRequest.getPassword().equals(storedPassword)) {
                    // Authentication successful, return the SSN in a JSON response
                    return "{\"ssn\": \"" + storedSsn + "\"}";
                } else {
                    // Incorrect password
                    return "Incorrect password";
                }
            }
        }
        return "User not found";
    }


    public static class SsnAndPasswordRequest {
        private String ssn;
        private String password;

        public String getSsn() {
            return ssn;
        }

        public void setSsn(String ssn) {
            this.ssn = ssn;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }

}
