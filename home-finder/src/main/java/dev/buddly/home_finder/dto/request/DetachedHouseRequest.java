package dev.buddly.home_finder.dto.request;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DetachedHouseRequest extends ListingRequest{

    @NotNull(message = "Land size must not be null")
    @Positive(message = "Land size must be a positive number")
    private Double landSize;

    @NotNull(message = "Number of rooms must not be null")
    @Positive(message = "Number of rooms must be a positive number")
    private Integer numberOfRooms;

    @NotNull(message = "Number of bathrooms must not be null")
    @Positive(message = "Number of bathrooms must be a positive number")
    private Integer numberOfBathrooms;

    private boolean hasGarden;

    private boolean hasGarage;
}
