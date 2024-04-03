package com.project.components.chainsandhotels.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.project.components.chainsandhotels.model.Room;
import com.project.components.chainsandhotels.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@CrossOrigin(origins = "*")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@RequestMapping("/findAndReserve")
public class RoomController {

    @Autowired
    private RoomService roomService;

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
            response.put(room.getHotel().getName(), Collections.singletonList(roomData));

        }

//        List<Room> rooms = roomService.findRoomsByCriteria(request.getChainName(), request.getCapacity(), request.getMinPrice(), request.getMaxPrice());
//       System.out.println(request.getChainName()+"hi");

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