package dev.buddly.home_finder.dto.response;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DetachedHouseResponse extends ListingResponse {

    private double landSize;
    private int numberOfRooms;
    private int numberOfBathrooms;
    private boolean hasGarden;
    private boolean hasGarage;
}
