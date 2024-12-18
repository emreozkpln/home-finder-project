package dev.buddly.home_finder.repo;

import dev.buddly.home_finder.entity.Listing;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ListingRepository extends JpaRepository<Listing,Integer> {

    Optional<Listing> findById(Integer id);

    Page<Listing> findAllByUserId(Integer userId, Pageable pageable);

    @Query("""
        SELECT i
        FROM Listing i
        LEFT JOIN FETCH Apartment a ON i.id = a.id
        LEFT JOIN FETCH DetachedHouse d ON i.id = d.id
        LEFT JOIN FETCH Land l ON i.id = l.id
        WHERE i.id = :id
    """)
    Listing findListingDetails(Integer id);

    @Query("SELECT l FROM Listing l  WHERE l.propertyType= :propertyType ORDER BY FUNCTION('RANDOM') ")
    Page<Listing> findThreeListingByPropertyType(String propertyType, Pageable pageable);

    @Query("SELECT l FROM Listing l ORDER BY FUNCTION('RANDOM')")
    Page<Listing> findRandomListings(Pageable pageable);

    @Query("""
        SELECT i
        FROM User u
        JOIN u.favoriteListings
        i WHERE u.id = :userId
    """)
    Page<Listing> findAllFavoriteListings(Integer userId, Pageable pageable);
}
