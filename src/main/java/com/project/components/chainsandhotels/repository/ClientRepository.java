package com.project.components.client.repository;

import com.project.components.client.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClientRepository extends JpaRepository<Client, String> {
    @Query("SELECT ssn, password FROM Client")
    List<Object[]> findSsnAndPassword();
}
