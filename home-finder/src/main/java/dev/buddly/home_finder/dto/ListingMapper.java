package dev.buddly.home_finder.dto;

import dev.buddly.home_finder.dto.request.ListingRequest;
import dev.buddly.home_finder.dto.response.ListingResponse;
import dev.buddly.home_finder.entity.*;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@Service
public class ListingMapper {

    public ListingResponse toResponse(Listing listing) {
        return ListingResponse.builder().
                id(listing.getId()).
                address(listing.getAddress()).
                listingTitle(listing.getListingTitle()).
                status(listing.getStatus()).
                city(listing.getCity()).
                district(listing.getDistrict()).
                price(listing.getPrice()).
                description(listing.getDescription()).
                propertyType(listing.getPropertyType()).
                user(listing.getUser().fullName()).
                userEmail(listing.getUser().getEmail()).
                createdDate(listing.getCreatedDate()).
                lastModifiedDate(listing.getLastModifiedDate()).
                createdBy(listing.getCreatedBy()).
                lastModifiedBy(listing.getLastModifiedBy()).
                additionalDetail(new HashMap<>()).
                imageUrl(
                        listing.getListingImages()
                                .stream()
                                .map(ListingImage::getUrl)
                                .toList()
                )
                .build();
    }

    public ListingResponse toResponseWithDetail(Listing listing) {

        ListingResponse.ListingResponseBuilder responseBuilder = ListingResponse.builder()
                .id(listing.getId())
                .address(listing.getAddress())
                .listingTitle(listing.getListingTitle())
                .status(listing.getStatus())
                .city(listing.getCity())
                .district(listing.getDistrict())
                .price(listing.getPrice())
                .description(listing.getDescription())
                .propertyType(listing.getPropertyType())
                .user(listing.getUser().fullName())
                .userEmail(listing.getUser().getEmail())
                .createdDate(listing.getCreatedDate())
                .lastModifiedDate(listing.getLastModifiedDate())
                .createdBy(listing.getCreatedBy())
                .lastModifiedBy(listing.getLastModifiedBy())
                .imageUrl(
                        listing.getListingImages()
                                .stream()
                                .map(ListingImage::getUrl)
                                .toList()
                );

        Map<String, Object> details = new HashMap<>();

        if (listing instanceof Apartment apartment) {
            details.put("areaWithMetres", apartment.getAreaWithMetres());
            details.put("floorNumber", apartment.getFloorNumber());
            details.put("totalFloors", apartment.getTotalFloors());
            details.put("numberOfRooms", apartment.getNumberOfRooms());
            details.put("numberOfBathrooms", apartment.getNumberOfBathrooms());
            details.put("hasBalcony", apartment.isHasBalcony());
            details.put("heatingType", apartment.getHeatingType());
        } else if (listing instanceof DetachedHouse detachedHouse) {
            details.put("landSize", detachedHouse.getLandSize());
            details.put("numberOfRooms", detachedHouse.getNumberOfRooms());
            details.put("numberOfBathrooms", detachedHouse.getNumberOfBathrooms());
            details.put("hasGarden", detachedHouse.isHasGarden());
            details.put("hasGarage", detachedHouse.isHasGarage());
        } else if (listing instanceof Land land) {
            details.put("landSize", land.getLandSize());
            details.put("zoningStatus", land.getZoningStatus());
            details.put("isSuitableForConstruction", land.isSuitableForConstruction());
            details.put("deedStatus", land.getDeedStatus());
        }

        responseBuilder.additionalDetail(details);
        return responseBuilder.build();
    }

}
