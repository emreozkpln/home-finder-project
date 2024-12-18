package dev.buddly.home_finder.controller;

import dev.buddly.home_finder.dto.response.ListingResponse;
import dev.buddly.home_finder.dto.response.PageResponseWithSet;
import dev.buddly.home_finder.service.FavoriteService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequiredArgsConstructor
@RequestMapping("favorite")
@Tag(name = "Favorite")
public class FavoriteController {

    private final FavoriteService favoriteService;

    @GetMapping
    public ResponseEntity<PageResponseWithSet<ListingResponse>> getFavoriteListings(
            @RequestParam(name = "page", defaultValue = "0", required = false) int page,
            @RequestParam(name = "size", defaultValue = "3", required = false) int size,
            Authentication connectedUser
    ) {
        return ResponseEntity.ok(favoriteService.getFavoriteListings(page,size,connectedUser));
    }
}
