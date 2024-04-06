package com.project.components.chainsandhotels.service;

import com.project.components.chainsandhotels.model.Reservation;
import com.project.components.chainsandhotels.model.Room;
import com.project.components.chainsandhotels.repository.EmployeeRepository;
import com.project.components.chainsandhotels.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class RoomImpl implements  RoomService{

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    public List<Room> findRoomsByCriteria(String chainName,String location, int capacity, double minPrice, double maxPrice, int rating) {
        return roomRepository.findRoomsByCriteria(chainName, location, capacity, minPrice, maxPrice, rating);
    }

    @Override
    public List<Room> getRoomsByEmployeeSsn(String employeeId) {
        // Fetch the hotel ID associated with the employee ID
        Integer hotelId = employeeRepository.findHotelIdByEmployeeId(employeeId);

        if (hotelId != null) {
            return roomRepository.findByHotelId(hotelId);
        } else {
            // Handle case where employee ID is not found or associated with a hotel
            return Collections.emptyList();
        }
    }

    @Override
    public List<Room> getRoomsByHotelId(Integer hotelId) {
        return roomRepository.findByHotelId(hotelId);
    }


}
