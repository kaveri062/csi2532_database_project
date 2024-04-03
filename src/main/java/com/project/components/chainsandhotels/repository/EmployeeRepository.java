package com.project.components.chainsandhotels.repository;

import com.project.components.chainsandhotels.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, String> {
    @Query("SELECT ssn, password FROM Employee")
    List<Object[]> findSsnAndPassword();

    @Query("SELECT e.hotelId FROM Employee e WHERE e.ssn = :employeeId")
    Integer findHotelIdByEmployeeId(@Param("employeeId") String employeeId);
}
