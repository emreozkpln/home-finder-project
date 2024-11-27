package dev.buddly.home_finder.repo;

import dev.buddly.home_finder.entity.Apartment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApartmentRepository extends JpaRepository<Apartment, Integer> {
}
