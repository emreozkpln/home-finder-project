package dev.buddly.home_finder.repo;

import dev.buddly.home_finder.entity.DetachedHouse;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DetachedHouseRepository extends JpaRepository<DetachedHouse,Integer> {
}
