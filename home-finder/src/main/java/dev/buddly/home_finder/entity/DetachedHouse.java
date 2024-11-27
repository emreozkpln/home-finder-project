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
@DiscriminatorValue("DetachedHouse")
public class DetachedHouse extends Listing {

    private double landSize;
    private int numberOfRooms;
    private int numberOfBathrooms;
    private boolean hasGarden;
    private boolean hasGarage;
}
