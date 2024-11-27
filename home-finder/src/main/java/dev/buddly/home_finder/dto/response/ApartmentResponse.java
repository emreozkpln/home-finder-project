package dev.buddly.home_finder.dto.response;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ApartmentResponse extends ListingResponse {
    
    private int floorNumber;
    private int totalFloors;
    private int numberOfRooms;
    private int numberOfBathrooms;
    private boolean hasBalcony;
    private String heatingType;
}
