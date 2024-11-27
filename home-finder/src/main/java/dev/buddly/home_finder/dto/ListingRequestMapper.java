package dev.buddly.home_finder.dto;

import dev.buddly.home_finder.dto.request.ApartmentRequest;
import dev.buddly.home_finder.dto.request.DetachedHouseRequest;
import dev.buddly.home_finder.dto.request.LandRequest;
import dev.buddly.home_finder.dto.request.ListingRequest;
import dev.buddly.home_finder.entity.Apartment;
import dev.buddly.home_finder.entity.DetachedHouse;
import dev.buddly.home_finder.entity.Land;
import dev.buddly.home_finder.entity.Listing;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class ListingRequestMapper {

    private <T extends Listing> T mapCommonFields(T listing, ListingRequest request) {
        listing.setAddress(request.getAddress());
        listing.setCity(request.getCity());
        listing.setDistrict(request.getDistrict());
        listing.setPrice(request.getPrice());
        listing.setDescription(request.getDescription());
        listing.setPropertyType(request.getPropertyType());
        listing.setCreatedDate(LocalDateTime.now());
        return listing;
    }

    public Apartment toApartment(ApartmentRequest request) {
        Apartment apartment = mapCommonFields(new Apartment(), request);
        apartment.setFloorNumber(request.getFloorNumber());
        apartment.setTotalFloors(request.getTotalFloors());
        apartment.setNumberOfRooms(request.getNumberOfRooms());
        apartment.setNumberOfBathrooms(request.getNumberOfBathrooms());
        apartment.setHasBalcony(request.isHasBalcony());
        apartment.setHeatingType(request.getHeatingType());
        return apartment;
    }

    public DetachedHouse toDetachedHouse(DetachedHouseRequest request) {
        DetachedHouse detachedHouse = mapCommonFields(new DetachedHouse(), request);
        detachedHouse.setLandSize(request.getLandSize());
        detachedHouse.setNumberOfRooms(request.getNumberOfRooms());
        detachedHouse.setNumberOfBathrooms(request.getNumberOfBathrooms());
        detachedHouse.setHasGarden(request.isHasGarden());
        detachedHouse.setHasGarage(request.isHasGarage());
        return detachedHouse;
    }

    public Land toLand(LandRequest request) {
        Land land = mapCommonFields(new Land(), request);
        land.setLandSize(request.getLandSize());
        land.setZoningStatus(request.getZoningStatus());
        land.setSuitableForConstruction(request.isSuitableForConstruction());
        land.setDeedStatus(request.getDeedStatus());
        return land;
    }

}
