package dev.buddly.home_finder.repo;

import dev.buddly.home_finder.entity.Land;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LandRepository extends JpaRepository<Land,Integer> {
}
