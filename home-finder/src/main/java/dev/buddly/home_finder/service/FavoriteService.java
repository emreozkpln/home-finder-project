package dev.buddly.home_finder.service;

import dev.buddly.home_finder.dto.ListingMapper;
import dev.buddly.home_finder.dto.response.ListingResponse;
import dev.buddly.home_finder.dto.response.PageResponseWithSet;
import dev.buddly.home_finder.entity.Listing;
import dev.buddly.home_finder.entity.User;
import dev.buddly.home_finder.exception.OperationNotPermittedException;
import dev.buddly.home_finder.repo.ListingRepository;
import dev.buddly.home_finder.repo.UserFavoriteRepository;
import dev.buddly.home_finder.repo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FavoriteService {

    private final UserRepository userRepository;
    private final ListingRepository listingRepository;
    private final UserFavoriteRepository userFavoriteRepository;
    private final ListingMapper listingMapper;

    public PageResponseWithSet<ListingResponse> getFavoriteListings(int page,int size,Authentication connectedUser) {
        User user = (User) connectedUser.getPrincipal();
        Pageable pageable = PageRequest.of(page,size, Sort.by("createdDate").descending());
        Page<Listing> listings = listingRepository.findAllFavoriteListings(user.getId(),pageable);
        Set<ListingResponse> listingResponse = listings.stream()
                .map(listingMapper::toResponse)
                .collect(Collectors.toSet());
        return new PageResponseWithSet<>(
                listingResponse,
                listings.getNumber(),
                listings.getSize(),
                listings.getTotalElements(),
                listings.getTotalPages(),
                listings.isFirst(),
                listings.isLast()
        );
    }

    @Transactional
    public void addFavoriteListing(Integer listingId, Authentication connectedUser) {
        User user = (User) connectedUser.getPrincipal();
        Listing listing = listingRepository.findById(listingId).orElseThrow();
        user.getFavoriteListings().add(listing);
        listing.getUsersWhoFavorited().add(user);
        userRepository.save(user);
        listingRepository.save(listing);
    }

    public void removeFavoriteListing(Integer listingId, Authentication connectedUser) {
        User user = (User) connectedUser.getPrincipal();
        userFavoriteRepository.deleteByListingAndUser(listingId,user.getId());
    }
}
