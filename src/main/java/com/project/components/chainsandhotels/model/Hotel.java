package com.project.components.chainsandhotels.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;


@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "hotels")
public class Hotel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "hotel_id")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "chain_id", referencedColumnName = "chain_id")
    private HotelChain hotelChain;

    @Column(name = "name")
    private String name;

    @Column(name = "address")
    private String address;

    @Column(name = "email")
    private String email;

    @Column(name = "phone")
    private String phone;

    @Column(name = "rating")
    private int rating;

    public Hotel() {
    }

    public Integer getHotelId() {
        return id;
    }

    public void setHotelId(Integer hotelId) {
        this.id = id;
    }

    public HotelChain getHotelChain() {
        return hotelChain;
    }

    public void setHotelChain(HotelChain hotelChain) {
        this.hotelChain = hotelChain;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }



    // Constructors, getters, and setters
}
