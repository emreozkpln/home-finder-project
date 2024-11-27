package dev.buddly.home_finder.dto.response;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LandResponse extends ListingResponse {

    private double landSize;
    private String zoningStatus;
    private boolean isSuitableForConstruction;
    private String deedStatus;
}
