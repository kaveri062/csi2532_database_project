package com.project.components.chainsandhotels.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.project.components.chainsandhotels.model.Hotel;
import com.project.components.chainsandhotels.model.Reservation;
import com.project.components.chainsandhotels.model.Room;
import com.project.components.chainsandhotels.model.RoomDTO;
import com.project.components.chainsandhotels.service.EmployeeService;
import com.project.components.chainsandhotels.service.HotelService;
import com.project.components.chainsandhotels.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@RequestMapping("/findAndReserve")
public class RoomController {

    @Autowired
    private RoomService roomService;

    @Autowired
    private HotelService hotelService;

    @Autowired
    private EmployeeService employeeService;

    //location, number of stars

    @PostMapping("/rooms")
    public ResponseEntity<Map<String, List<Map<String, Object>>>> getRoomsByCriteria(@RequestBody RoomSearchRequest request) {
        String chainName = "Maple Leaf Resorts";
        int capacity = 2;
        double minPrice = 300;
        double maxPrice = 750;
        List<Room> rooms = roomService.findRoomsByCriteria(request.getChainName(), request.getLocation(), request.getCapacity(), request.getMinPrice(), request.getMaxPrice(), request.getRating());
        Map<String, List<Map<String, Object>>> response = new LinkedHashMap<>();

        System.out.println(request.getLocation());

        for (Room room : rooms) {
            Map<String, Object> roomData = new LinkedHashMap<>();
            roomData.put("hotelName", room.getHotel().getName());
            roomData.put("hotelId", room.getHotel().getHotelId());
            roomData.put("roomId", room.getId());
            roomData.put("address", room.getHotel().getAddress());
            roomData.put("rating", room.getHotel().getRating());
            roomData.put("price", room.getPrice());
            roomData.put("amenities", room.getAmenities());

            // Check if the hotel name already exists in the response map
            if (response.containsKey(room.getHotel().getName())) {
                // If it exists, append the room data to the existing list of rooms for that hotel
                List<Map<String, Object>> hotelRooms = response.get(room.getHotel().getName());
                hotelRooms.add(roomData);
            } else {
                // If it doesn't exist, create a new list and add the room data to it
                List<Map<String, Object>> hotelRooms = new ArrayList<>();
                hotelRooms.add(roomData);
                response.put(room.getHotel().getName(), hotelRooms);
            }
        }
        return ResponseEntity.ok(response);
    }

    @PostMapping("/roomsByEmployeeId")
    public List<RoomDTO> getRoomsByEmployeeId(@RequestBody Map<String, String> requestBody) {
        String employeeId = requestBody.get("employeeId");
        List<Room> rooms = roomService.getRoomsByEmployeeSsn(employeeId);
        return rooms.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    private RoomDTO convertToDTO(Room room) {
        RoomDTO dto = new RoomDTO();
        dto.setId(room.getId());
        dto.setType(room.getType());
        dto.setPrice(room.getPrice());
        dto.setAmenities(room.getAmenities());
        dto.setCapacity(room.getCapacity());
        dto.setSeaView(room.isSeaView());
        dto.setExtendable(room.isExtendable());
        dto.setIssues(room.getIssues());
        return dto;
    }

    @PostMapping("/roomsByHotel")
    public ResponseEntity<Map<String, Object>> getRoomsByHotelId(@RequestBody Map<String, Integer> requestBody) {
        Integer hotelId = requestBody.get("hotelId");

        Hotel hotel = hotelService.getHotelById(hotelId);

        Map<String, Object> response = new HashMap<>();
        response.put("hotelId", hotel.getHotelId());
        response.put("hotelName", hotel.getName());
        response.put("hotelAddress", hotel.getAddress());

        List<Room> rooms = roomService.getRoomsByHotelId(hotelId);
        List<RoomDTO> roomDTOs = rooms.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());

        response.put("rooms", roomDTOs);

        return ResponseEntity.ok(response);
    }


    public static class RoomSearchRequest {

        private String chainName, location;
        private int capacity;
        private int rating;
        private double minPrice;
        private double maxPrice;

        public String getLocation() {
            return location;
        }

        public void setLocation(String location) {
            this.location = location;
        }
        public int getRating() {
            return rating;
        }

        public void setRating(int rating) {
            this.rating = rating;
        }

        public String getChainName() {
            return chainName;
        }

        public void setChainName(String chainName) {
            this.chainName = chainName;
        }

        public int getCapacity() {
            return capacity;
        }

        public void setCapacity(int capacity) {
            this.capacity = capacity;
        }

        public double getMinPrice() {
            return minPrice;
        }

        public void setMinPrice(double minPrice) {
            this.minPrice = minPrice;
        }

        public double getMaxPrice() {
            return maxPrice;
        }

        public void setMaxPrice(double maxPrice) {
            this.maxPrice = maxPrice;
        }
    }

}