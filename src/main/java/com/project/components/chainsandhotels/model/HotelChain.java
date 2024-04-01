package com.project.components.chainsandhotels.model;
import jakarta.persistence.*;

@Entity
@Table(name = "hotel_chains") // Specify the table name if it's different from the class name
public class HotelChain {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "chain_id") // Map this field to the column "chain_id" in the table
    private Integer chainId;

    @Column(name = "name") // Map this field to the column "name" in the table
    private String chainName;

    @Column(name = "headquarters_address") // Map this field to the column "headquarters_address" in the table
    private String headquartersAddress;

    @Column(name = "contact_email") // Map this field to the column "contact_email" in the table
    private String contactEmail;

    @Column(name = "contact_phone") // Map this field to the column "contact_phone" in the table
    private String contactPhone;

    @Column(name = "number_of_hotels") // Map this field to the column "number_of_hotels" in the table
    private int numberOfHotels;

    public HotelChain() {
    }

    public Integer getChainId() {
        return chainId;
    }

    public void setChainId(Integer chainId) {
        this.chainId = chainId;
    }

    public String getChainName() {
        return chainName;
    }

    public void setChainName(String chainName) {
        this.chainName = chainName;
    }

    public String getHeadquartersAddress() {
        return headquartersAddress;
    }

    public void setHeadquartersAddress(String headquartersAddress) {
        this.headquartersAddress = headquartersAddress;
    }

    public String getContactEmail() {
        return contactEmail;
    }

    public void setContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
    }

    public String getContactPhone() {
        return contactPhone;
    }

    public void setContactPhone(String contactPhone) {
        this.contactPhone = contactPhone;
    }

    public int getNumberOfHotels() {
        return numberOfHotels;
    }

    public void setNumberOfHotels(int numberOfHotels) {
        this.numberOfHotels = numberOfHotels;
    }
}
