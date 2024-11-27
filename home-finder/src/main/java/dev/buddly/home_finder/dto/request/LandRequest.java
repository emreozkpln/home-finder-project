package dev.buddly.home_finder.dto.request;

import jakarta.validation.constraints.NotBlank;
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
public class LandRequest extends ListingRequest{

    @NotNull(message = "Land size must not be null")
    @Positive(message = "Land size must be a positive number")
    private Double landSize;

    @NotBlank(message = "Zoning status must not be blank")
    private String zoningStatus;

    private boolean isSuitableForConstruction;

    @NotBlank(message = "Deed status must not be blank")
    private String deedStatus;
}
