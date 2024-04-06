package com.project.components.chainsandhotels.service;

import com.project.components.chainsandhotels.model.Reservation;
import com.project.components.chainsandhotels.model.Room;

import java.util.List;

public interface RoomService {

    List<Room> findRoomsByCriteria(String chainName,String location, int capacity, double minPrice, double maxPrice, int rating);
    public List<Room> getRoomsByEmployeeSsn(String employeeId);
    List<Room> getRoomsByHotelId(Integer hotelId);
}
