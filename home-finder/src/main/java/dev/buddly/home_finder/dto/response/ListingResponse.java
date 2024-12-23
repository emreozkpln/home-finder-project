package dev.buddly.home_finder.dto.response;

import lombok.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ListingResponse {

    private Integer id;
    private String address;
    private String listingTitle;
    private String status;
    private String city;
    private String district;
    private double price;
    private String description;
    private String propertyType;
    private String user;
    private String userEmail;
    private LocalDateTime createdDate;
    private LocalDateTime lastModifiedDate;
    private Integer createdBy;
    private Integer lastModifiedBy;
    private Map<String,Object> additionalDetail;
    private List<String> imageUrl;
}
