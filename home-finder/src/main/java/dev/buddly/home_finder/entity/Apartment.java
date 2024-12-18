package dev.buddly.home_finder.entity;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@DiscriminatorValue("Apartment")
public class Apartment extends Listing {

    private double areaWithMetres;
    private int floorNumber;
    private int totalFloors;
    private int numberOfRooms;
    private int numberOfBathrooms;
    private boolean hasBalcony;
    private String heatingType;
}
