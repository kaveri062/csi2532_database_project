package com.project.components.chainsandhotels.repository;

import com.project.components.chainsandhotels.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {
    @Query("SELECT r FROM Room r JOIN r.hotel h JOIN h.hotelChain hc WHERE (:chainName IS NULL OR :chainName = '' OR hc.chainName = :chainName) AND h.address LIKE %:location% AND h.rating >= :minRating AND r.capacity >= :minCapacity AND r.price BETWEEN :minPrice AND :maxPrice")
    List<Room> findRoomsByCriteria(@Param("chainName") String chainName, @Param("location") String location, @Param("minCapacity") int minCapacity, @Param("minPrice") double minPrice, @Param("maxPrice") double maxPrice, @Param("minRating") int minRating);
}