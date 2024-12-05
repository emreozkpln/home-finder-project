package dev.buddly.home_finder.service;

import dev.buddly.home_finder.dto.request.ApartmentRequest;
import dev.buddly.home_finder.dto.ListingRequestMapper;
import dev.buddly.home_finder.dto.request.DetachedHouseRequest;
import dev.buddly.home_finder.dto.request.LandRequest;
import dev.buddly.home_finder.dto.request.ListingRequest;
import dev.buddly.home_finder.dto.response.ListingResponse;
import dev.buddly.home_finder.dto.response.PageResponse;
import dev.buddly.home_finder.dto.ListingMapper;
import dev.buddly.home_finder.entity.*;
import dev.buddly.home_finder.exception.OperationNotPermittedException;
import dev.buddly.home_finder.repo.ApartmentRepository;
import dev.buddly.home_finder.repo.DetachedHouseRepository;
import dev.buddly.home_finder.repo.LandRepository;
import dev.buddly.home_finder.repo.ListingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ListingService {

    private final ListingRepository listingRepository;
    private final ApartmentRepository apartmentRepository;
    private final DetachedHouseRepository detachedHouseRepository;
    private final LandRepository landRepository;
    private final ListingMapper listingMapper;
    private final ListingRequestMapper listingRequestMapper;

    public List<ListingResponse> findThreeListing(){
        Page<Listing> randomListings = listingRepository.findRandomListings(PageRequest.of(0, 3));
        List<Listing> result = randomListings.getContent();
        return result.stream()
                .map(listingMapper::toResponse)
                .toList();
    }

    public List<ListingResponse> findThreeListingByPropertyType(String propertyType){
        Page<Listing> randomListings = listingRepository.findThreeListingByPropertyType(propertyType,PageRequest.of(0, 3));
        List<Listing> result = randomListings.getContent();
        return result.stream()
                .map(listingMapper::toResponse)
                .toList();
    }

    public PageResponse<ListingResponse> findAllListing(int page, int size) {
        Pageable pageable = PageRequest.of(page,size, Sort.by("createdDate").descending());
        Page<Listing> listings = listingRepository.findAll(pageable);
        List<ListingResponse> listingResponse = listings
                .stream()
                .map(listingMapper::toResponse)
                .collect(Collectors.toList());

        return new PageResponse<>(
                listingResponse,
                listings.getNumber(),
                listings.getSize(),
                listings.getTotalElements(),
                listings.getTotalPages(),
                listings.isFirst(),
                listings.isLast()
        );
    }

    public PageResponse<ListingResponse> findListingByUser(int page, int size, Authentication connectedUser) {
        User user = (User) connectedUser.getPrincipal();
        Pageable pageable = PageRequest.of(page,size,Sort.by("createdDate").descending());
        Page<Listing> listings = listingRepository.findAllByUserId(user.getId(),pageable);
        List<ListingResponse> listingResponse = listings
                .stream()
                .map(listingMapper::toResponse)
                .collect(Collectors.toList());

        return new PageResponse<>(
                listingResponse,
                listings.getNumber(),
                listings.getSize(),
                listings.getTotalElements(),
                listings.getTotalPages(),
                listings.isFirst(),
                listings.isLast()
        );
    }

    public ListingResponse findByListingId(Integer listingId) {
        Listing listing = listingRepository.findListingDetails(listingId);
        if(listing == null){
            throw new OperationNotPermittedException("Listing not found");
        }
        return listingMapper.toResponseWithDetail(listing);
    }

    public void addApartmentListing(ApartmentRequest request, Authentication connectedUser) {
        User user = (User) connectedUser.getPrincipal();
        Apartment apartment = listingRequestMapper.toApartment(request);
        apartment.setCreatedBy(user.getId());
        apartment.setUser(user);
        apartmentRepository.save(apartment);
    }

    public void addDetachedHouseListing(DetachedHouseRequest request, Authentication connectedUser) {
        User user = (User) connectedUser.getPrincipal();
        DetachedHouse detachedHouse = listingRequestMapper.toDetachedHouse(request);
        detachedHouse.setCreatedBy(user.getId());
        detachedHouse.setUser(user);
        detachedHouseRepository.save(detachedHouse);
    }

    public void addLandListing(LandRequest request, Authentication connectedUser) {
        User user = (User) connectedUser.getPrincipal();
        Land land = listingRequestMapper.toLand(request);
        land.setCreatedBy(user.getId());
        land.setUser(user);
        landRepository.save(land);
    }

    public void deleteListing(Integer listingId, Authentication connectedUser) {
        User user = (User) connectedUser.getPrincipal();
        Listing listing = listingRepository.findById(listingId)
                .orElseThrow(() -> new OperationNotPermittedException("Listing not found"));
        if(listing.getCreatedBy().equals(user.getId())) {
            listingRepository.delete(listing);
        }
    }

    public void updateApartment(Integer id, ApartmentRequest request, Authentication connectedUser) {
        User user = (User) connectedUser.getPrincipal();
        Apartment apartment = apartmentRepository.findById(id)
                .orElseThrow(() -> new OperationNotPermittedException("Listing not found"));
        if(!Objects.equals(apartment.getUser().getId(),user.getId())) {
            throw new OperationNotPermittedException("User not authorized to update this listing");
        }
        updateCommonArea(apartment, request, user.getId());
        apartment.setFloorNumber(request.getFloorNumber());
        apartment.setTotalFloors(request.getTotalFloors());
        apartment.setNumberOfRooms(request.getNumberOfRooms());
        apartment.setNumberOfBathrooms(request.getNumberOfBathrooms());
        apartment.setHasBalcony(request.isHasBalcony());
        apartment.setHeatingType(request.getHeatingType());
        apartmentRepository.save(apartment);
    }

    public void updateDetachedHouse(Integer id, DetachedHouseRequest request, Authentication connectedUser) {
        User user = (User) connectedUser.getPrincipal();
        DetachedHouse detachedHouse = detachedHouseRepository.findById(id)
                .orElseThrow(() -> new OperationNotPermittedException("Listing not found"));
        if(!Objects.equals(detachedHouse.getUser().getId(),user.getId())) {
            throw new OperationNotPermittedException("User not authorized to update this listing");
        }
        updateCommonArea(detachedHouse, request, user.getId());
        detachedHouse.setLandSize(request.getLandSize());
        detachedHouse.setNumberOfRooms(request.getNumberOfRooms());
        detachedHouse.setNumberOfBathrooms(request.getNumberOfBathrooms());
        detachedHouse.setHasGarage(request.isHasGarage());
        detachedHouse.setHasGarden(request.isHasGarden());
        detachedHouseRepository.save(detachedHouse);
    }

    public void updateLand(Integer id, LandRequest request, Authentication connectedUser) {
        User user = (User) connectedUser.getPrincipal();
        Land land = landRepository.findById(id)
                .orElseThrow(() -> new OperationNotPermittedException("Listing not found"));
        if(!Objects.equals(land.getUser().getId(),user.getId())) {
            throw new OperationNotPermittedException("User not authorized to update this listing");
        }
        updateCommonArea(land, request, user.getId());
        land.setLandSize(request.getLandSize());
        land.setZoningStatus(request.getZoningStatus());
        land.setSuitableForConstruction(request.isSuitableForConstruction());
        land.setDeedStatus(request.getDeedStatus());
        landRepository.save(land);
    }

    private <T extends Listing> T updateCommonArea(T listing, ListingRequest request, Integer userId) {
        listing.setAddress(request.getAddress());
        listing.setCity(request.getCity());
        listing.setDistrict(request.getDistrict());
        listing.setPrice(request.getPrice());
        listing.setDescription(request.getDescription());
        listing.setLastModifiedBy(userId);
        listing.setLastModifiedDate(LocalDateTime.now());
        return listing;
    }
}
