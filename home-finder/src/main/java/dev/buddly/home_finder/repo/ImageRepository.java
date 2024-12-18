package dev.buddly.home_finder.repo;

import dev.buddly.home_finder.entity.ListingImage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<ListingImage, Integer> {
}
