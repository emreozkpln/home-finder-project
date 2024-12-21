package dev.buddly.home_finder.repo;

import dev.buddly.home_finder.entity.UserFavorite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface UserFavoriteRepository extends JpaRepository<UserFavorite,Long> {

    @Modifying
    @Transactional
    @Query("DELETE FROM UserFavorite uf WHERE uf.listing.id = :listingId AND uf.user.id = :userId")
    void deleteByListingAndUser(@Param("listingId") Integer listingId, @Param("userId") Integer userId);
}
