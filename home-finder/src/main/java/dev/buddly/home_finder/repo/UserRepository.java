package dev.buddly.home_finder.repo;

import dev.buddly.home_finder.entity.Listing;
import dev.buddly.home_finder.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Integer> {

    Optional<User> findById(Integer userId);

    Optional<User> findByEmail(String email);


}
