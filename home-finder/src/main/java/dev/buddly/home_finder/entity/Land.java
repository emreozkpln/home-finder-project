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
@DiscriminatorValue("Land")
public class Land extends Listing {

    private double landSize;
    private String zoningStatus;
    private boolean isSuitableForConstruction;
    private String deedStatus;
}
