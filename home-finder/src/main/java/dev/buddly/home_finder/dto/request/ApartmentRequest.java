package dev.buddly.home_finder.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ApartmentRequest extends ListingRequest{

    @NotNull(message = "Floor must not be null")
    @PositiveOrZero(message = "Floor must be 0 or a positive number")
    private int floorNumber;

    @NotNull(message = "Total Floor must not be null")
    @Positive(message = "Total Floor must be 0 or a positive number")
    private int totalFloors;

    @NotNull(message = "Number of rooms must not be null")
    @Positive(message = "Number of rooms must be a positive number")
    private int numberOfRooms;

    @NotNull(message = "Number of bathrooms must not be null")
    @Positive(message = "Number of bathrooms must be a positive number")
    private int numberOfBathrooms;

    private boolean hasBalcony;

    @NotBlank(message = "Heating type must not be blank")
    private String heatingType;
}
