package dev.buddly.home_finder.controller;

import dev.buddly.home_finder.dto.request.ApartmentRequest;
import dev.buddly.home_finder.dto.request.DetachedHouseRequest;
import dev.buddly.home_finder.dto.request.LandRequest;
import dev.buddly.home_finder.dto.response.ListingResponse;
import dev.buddly.home_finder.dto.response.PageResponse;
import dev.buddly.home_finder.elasticsearch.ListingDocument;
import dev.buddly.home_finder.elasticsearch.ListingDocumentService;
import dev.buddly.home_finder.handler.ResponseHandler;
import dev.buddly.home_finder.service.ListingService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("listing")
@Tag(name = "Listing")
public class ListingController {

    private final ListingService service;
    private final ListingDocumentService documentService;

    @GetMapping("/compare")
    public ResponseEntity<Object> compare(){
        documentService.indexData();
        return ResponseHandler.handle("Done",HttpStatus.OK,null);
    }

    @GetMapping("/three-listing")
    public ResponseEntity<List<ListingResponse>> findThreeListing(){
        return ResponseEntity.ok(service.findThreeListing());
    }

    @GetMapping("/three-listing/{propertyType}")
    public ResponseEntity<List<ListingResponse>> findThreeListingByPropertyType(
            @PathVariable String propertyType
    ){
        return ResponseEntity.ok(service.findThreeListingByPropertyType(propertyType));
    }

    @GetMapping("/index/{index}")
    public ResponseEntity<List<ListingDocument>> getAllIndex(
            @PathVariable String index
    ){
        return ResponseEntity.ok(documentService.getAllDataFromIndex(index));
    }

    @PostMapping("/search")
    public ResponseEntity<List<ListingDocument>> searchListingsByFieldsAndValues(
            @RequestParam Map<String, String> request
    ){
        return ResponseEntity.ok(documentService.searchListingsByFieldsAndValues(request));
    }

    @PostMapping("/search-parametres")
    public ResponseEntity<PageResponse<ListingDocument>> searchListings(
            @RequestParam String location,
            @RequestParam String propertyType,
            @RequestParam Double price,
            @RequestParam(name = "page", defaultValue = "0", required = false) int page,
            @RequestParam(name = "size", defaultValue = "10", required = false) int size
    ){
        return ResponseEntity.ok(documentService.searchListingByPropertyLocation(location,propertyType,price,page,size));
    }

    @GetMapping
    public ResponseEntity<PageResponse<ListingResponse>> findAllListing(
            @RequestParam(name = "page", defaultValue = "0", required = false) int page,
            @RequestParam(name = "size", defaultValue = "10", required = false) int size,
            @RequestParam(name = "sortDirection") String sortDirection
    ){
        return ResponseEntity.ok(service.findAllListing(page,size,sortDirection));
    }

    @GetMapping("/des/price")
    public ResponseEntity<PageResponse<ListingResponse>> findAllListingDescendingPrice(
            @RequestParam(name = "page", defaultValue = "0", required = false) int page,
            @RequestParam(name = "size", defaultValue = "10", required = false) int size,
            @RequestParam(name = "sortDirection") String sortDirection
    ){
        return ResponseEntity.ok(service.findAllListingDescendingPrice(page,size,sortDirection));
    }

    @GetMapping("/user")
    public ResponseEntity<PageResponse<ListingResponse>> findListingByUser(
            @RequestParam(name = "page", defaultValue = "0", required = false) int page,
            @RequestParam(name = "size", defaultValue = "3", required = false) int size,
            Authentication connectedUser
    ){
        return ResponseEntity.ok(service.findListingByUser(page,size,connectedUser));
    }

    @GetMapping("/id/{listingId}")
    public ResponseEntity<ListingResponse> findByListingId(
            @PathVariable Integer listingId
    ){
        return ResponseEntity.ok(service.findByListingId(listingId));
    }

    @PostMapping("/add/apartment")
    public ResponseEntity<Object> addApartmentListing(
            @RequestBody @Valid ApartmentRequest request,
            Authentication connectedUser
    ){
        service.addApartmentListing(request,connectedUser);
        return ResponseHandler.handle("Listing added successfully",HttpStatus.CREATED,null);
    }

    @PostMapping("/add/detached-house")
    public ResponseEntity<Object> addDetachedHouseListing(
            @RequestBody @Valid DetachedHouseRequest request,
            Authentication connectedUser
    ){
        service.addDetachedHouseListing(request,connectedUser);
        return ResponseHandler.handle("Listing added successfully",HttpStatus.CREATED,null);
    }

    @PostMapping("/add/land")
    public ResponseEntity<Object> addLandListing(
            @RequestBody @Valid LandRequest request,
            Authentication connectedUser
    ){
        service.addLandListing(request,connectedUser);
        return ResponseHandler.handle("Listing added successfully",HttpStatus.CREATED,null);
    }

    @PatchMapping("/update/apartment/{id}")
    public ResponseEntity<Object> updateApartmentListing(
            @PathVariable Integer id,
            @RequestBody @Valid ApartmentRequest request,
            Authentication connectedUser
    ){
        service.updateApartment(id,request,connectedUser);
        return ResponseHandler.handle("Listing updated successfully",HttpStatus.OK,request);
    }

    @PatchMapping("/update/detached-house/{id}")
    public ResponseEntity<Object> updateDetachedHouseListing(
            @PathVariable Integer id,
            @RequestBody @Valid DetachedHouseRequest request,
            Authentication connectedUser
    ){
        service.updateDetachedHouse(id,request,connectedUser);
        return ResponseHandler.handle("Listing updated successfully",HttpStatus.OK,request);
    }

    @PatchMapping("/update/land/{id}")
    public ResponseEntity<Object> updateLandListing(
            @PathVariable Integer id,
            @RequestBody @Valid LandRequest request,
            Authentication connectedUser
    ){
        service.updateLand(id,request,connectedUser);
        return ResponseHandler.handle("Listing updated successfully",HttpStatus.OK,request);
    }

    @DeleteMapping("/delete/{listingId}")
    public ResponseEntity<Object> deleteListing(
            @PathVariable Integer listingId,
            Authentication connectedUser
    ){
        service.deleteListing(listingId,connectedUser);
        documentService.deleteListingById(listingId);
        return ResponseHandler.handle("Listing deleted", HttpStatus.OK,null);
    }


}
