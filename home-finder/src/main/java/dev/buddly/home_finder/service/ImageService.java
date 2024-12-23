package dev.buddly.home_finder.service;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.services.s3.AmazonS3;
import dev.buddly.home_finder.entity.Listing;
import dev.buddly.home_finder.entity.ListingImage;
import dev.buddly.home_finder.repo.ImageRepository;
import dev.buddly.home_finder.repo.ListingRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
@RequiredArgsConstructor
@Slf4j
public class ImageService {

    private final ImageRepository imageRepository;
    private final ListingRepository listingRepository;
    private final AmazonS3 s3client;

    private String bucketName = "";

    @Transactional
    public String uploadFileAndSaveListing(Integer id,String keyName, MultipartFile file) throws IOException {
        try {
            s3client.putObject(bucketName, keyName, file.getInputStream(), null);
            String fileUrl = s3client.getUrl(bucketName, keyName).toString();
            Listing listing = listingRepository.findById(id).orElseThrow();
            ListingImage savedImage = saveImage(listing,fileUrl, keyName);
            listing.getListingImages().add(savedImage);
            listingRepository.save(listing);
            return savedImage.getUrl();
        }catch (AmazonServiceException e){
            log.error("Amazon S3'ta dosya yükleme hatası: {}", e.getMessage());
            throw new IOException("Dosya yüklenemedi.");
        }
    }

    private ListingImage saveImage(Listing listing,String fileUrl, String keyName){
        ListingImage listingImage = new ListingImage();
        listingImage.setUrl(fileUrl);
        listingImage.setKeyName(keyName);
        listingImage.setListing(listing);
        return imageRepository.save(listingImage);
    }
}
