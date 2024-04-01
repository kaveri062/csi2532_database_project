package com.project.components.chainsandhotels.repository;

import com.project.components.chainsandhotels.model.HotelChain;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HotelChainRepository extends JpaRepository<HotelChain, Integer> {
}
