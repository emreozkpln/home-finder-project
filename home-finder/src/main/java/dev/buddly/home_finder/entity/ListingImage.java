package dev.buddly.home_finder.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ListingImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String url;
    private String keyName;
    @ManyToOne
    @JoinColumn(name = "listing_id")
    private Listing listing;
}
