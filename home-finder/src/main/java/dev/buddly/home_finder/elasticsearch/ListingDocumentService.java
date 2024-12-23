package dev.buddly.home_finder.elasticsearch;

import co.elastic.clients.elasticsearch.ElasticsearchClient;
import co.elastic.clients.elasticsearch._types.SortOrder;
import co.elastic.clients.elasticsearch._types.query_dsl.Query;
import co.elastic.clients.elasticsearch.core.IndexRequest;
import co.elastic.clients.elasticsearch.core.SearchResponse;
import co.elastic.clients.elasticsearch.core.search.Hit;
import dev.buddly.home_finder.dto.response.PageResponse;
import dev.buddly.home_finder.entity.Listing;
import dev.buddly.home_finder.exception.OperationNotPermittedException;
import dev.buddly.home_finder.repo.ListingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ListingDocumentService {

    private final ElasticsearchClient elasticsearchClient;
    private final ElasticsearchRepository elasticsearchRepository;
    private final ListingRepository listingRepository;

    public List<ListingDocument> getAllDataFromIndex(String indexName) {
        var query = EsUtil.createMatchAllQuery();
        SearchResponse<ListingDocument> response = null;
        try{
            response = elasticsearchClient.search(
                    q -> q.index(indexName).query(query), ListingDocument.class);
        } catch (IOException e) {
            throw new OperationNotPermittedException(e.toString());
        }

        return extractAllResponse(response);
    }

    public List<ListingDocument> searchListingsByFieldsAndValues(Map<String, String> request){
        var query = EsUtil.buildMultipleMatchQuery(request);
        SearchResponse<ListingDocument> response = null;
        try{
            response = elasticsearchClient.search(
                    q -> q.index("listing_index").query(query.get()), ListingDocument.class);
        } catch (IOException e) {
            throw new OperationNotPermittedException(e.toString());
        }

        return extractAllResponse(response);
    }

    public PageResponse<ListingDocument> searchListingByPropertyLocation(String location,String propertyType,Double price,int page, int size){
        var query = EsUtil.createBoolQuery(location,propertyType,price);
        SearchResponse<ListingDocument> response = null;
        try{
            response = elasticsearchClient.search(
                    q -> q.index("listing_index").query(query.get()).from(page * size).size(size).sort(s -> s.field(f -> f.field("createdDate").order(SortOrder.Desc))), ListingDocument.class);
        } catch (IOException e) {
            throw new OperationNotPermittedException(e.toString());
        }

        List<ListingDocument> listingDocuments = extractAllResponse(response);
        long totalElements = response.hits().total().value();
        int totalPages = (int) Math.ceil((double) totalElements / size);

        return new PageResponse<>(
                listingDocuments,
                page,
                size,
                totalElements,
                totalPages,
                page == 0,
                (page + 1) == totalPages
        );
    }

    public void deleteListingById(Integer listingId){
        elasticsearchRepository.deleteById(listingId);
    }

    private List<ListingDocument> extractAllResponse(SearchResponse<ListingDocument> response){
        return response
                .hits()
                .hits()
                .stream()
                .map(Hit::source)
                .collect(Collectors.toList());
    }

    public void indexData(){
        List<Listing> listings = listingRepository.findAll();
        for(Listing listing : listings){
            ListingDocument listingDocument = new ListingDocument(
                listing.getId().toString(),
                listing.getAddress(),
                    listing.getCity(),
                    listing.getDistrict(),
                    listing.getPrice(),
                    listing.getDescription(),
                    listing.getPropertyType(),
                    listing.getUser().fullName(),
                    listing.getCreatedDate(),
                    listing.getLastModifiedDate(),
                    listing.getCreatedBy(),
                    listing.getLastModifiedBy()
            );
            indexListingDocument(listingDocument);
            //System.out.println("Indexed document with ID: " + listingDocument.getId());
        }
    }

    public void indexListingDocument(ListingDocument listingDocument) {
        try {
            // Elasticsearch'e indeksleme
            IndexRequest<ListingDocument> request = IndexRequest.of(i -> i
                    .index("listing_index")
                    .id(listingDocument.getId())
                    .document(listingDocument)
            );
            elasticsearchClient.index(request);
        } catch (Exception e) {
            // Hata durumunda loglama
            e.printStackTrace();
        }
    }

}
