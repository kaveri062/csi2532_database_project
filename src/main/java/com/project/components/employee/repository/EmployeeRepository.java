package com.project.components.employee.repository;

import com.project.components.employee.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, String> {
    @Query("SELECT ssn, password FROM Employee")
    List<Object[]> findSsnAndPassword();
}
