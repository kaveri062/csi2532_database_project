package com.project.components.chainsandhotels.service;

import com.project.components.chainsandhotels.model.Room;
import com.project.components.chainsandhotels.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomImpl implements  RoomService{

    @Autowired
    private RoomRepository roomRepository;

    public List<Room> findRoomsByCriteria(String chainName,String location, int capacity, double minPrice, double maxPrice, int rating) {
        return roomRepository.findRoomsByCriteria(chainName, location, capacity, minPrice, maxPrice, rating);
    }
}
