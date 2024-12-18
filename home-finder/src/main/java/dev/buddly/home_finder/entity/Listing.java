package dev.buddly.home_finder.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
@Inheritance(strategy = InheritanceType.JOINED)
@DiscriminatorColumn(name = "propertyType",discriminatorType = DiscriminatorType.STRING)
public class Listing {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "seq_gen")
    @SequenceGenerator(name = "seq_gen",sequenceName = "listing_sequence",initialValue = 100,allocationSize = 1)
    private Integer id;
    private String listingTitle;
    private String address;
    private String city;
    private String district;
    private double price;
    private String status;
    private String description;
    @Column(insertable = false, updatable = false)
    private String propertyType;

    @OneToMany(mappedBy = "listing",cascade = CascadeType.ALL,orphanRemoval = true)
    private List<ListingImage> listingImages;

    @ManyToMany(mappedBy = "favoriteListings")
    private Set<User> usersWhoFavorited = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @CreatedDate
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdDate;

    @LastModifiedDate
    @Column(insertable = false)
    private LocalDateTime lastModifiedDate;

    @CreatedBy
    @Column(nullable = false, updatable = false)
    private Integer createdBy;

    @LastModifiedBy
    @Column(insertable = false)
    private Integer lastModifiedBy;
}
