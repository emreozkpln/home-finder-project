package dev.buddly.home_finder.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ListingRequest {

    @NotBlank(message = "Address cannot be blank")
    private String address;

    @Size(max = 50, message = "Listing title cannot exceed 500 characters")
    private String listingTitle;

    @NotBlank(message = "Status cannot be blank")
    private String status;

    @NotBlank(message = "City cannot be blank")
    private String city;

    @NotBlank(message = "District cannot be blank")
    private String district;

    @NotNull(message = "Price must not be null")
    @Positive(message = "Price must be a positive number")
    private Double price;

    @Size(max = 500, message = "Description cannot exceed 500 characters")
    private String description;

    @NotBlank(message = "Property type must not be blank")
    private String propertyType;
}
