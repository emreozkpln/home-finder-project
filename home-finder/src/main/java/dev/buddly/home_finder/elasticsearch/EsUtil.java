package dev.buddly.home_finder.elasticsearch;

import co.elastic.clients.elasticsearch._types.query_dsl.*;
import co.elastic.clients.json.JsonData;
import lombok.experimental.UtilityClass;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.function.Supplier;

@UtilityClass
public class EsUtil {

    public static Query createMatchAllQuery(){
        return Query.of(q->q.matchAll(new MatchAllQuery.Builder().build()));
    }

    public static Supplier<Query> buildMultipleMatchQuery(Map<String, String> request) {
        BoolQuery.Builder boolQueryBuilder = new BoolQuery.Builder();
        request.forEach((field, value) -> {
            MatchQuery matchQuery = QueryBuilders.match()
                    .field(field)
                    .query(value)
                    .build();
            boolQueryBuilder.must(Query.of(q -> q.match(matchQuery)));
        });
        return () -> Query.of(q -> q.bool(boolQueryBuilder.build()));
    }

    public static Supplier<Query> createBoolQuery(String location,String propertyType,Integer price){
        BoolQuery.Builder boolQueryBuilder = new BoolQuery.Builder();

        if (propertyType != null) {
            boolQueryBuilder.must(Query.of(q -> q
                    .match(m -> m
                            .field("propertyType")
                            .query(propertyType))));
        }

        if (location != null) {
            boolQueryBuilder.must(Query.of(q -> q
                    .match(p -> p
                            .field("city")
                            .query(location)
                            .analyzer("custom_index_analyzer"))));
        }

        if (price != null) {
            boolQueryBuilder.must(Query.of(q -> q
                    .range(r -> r
                            .field("price")
                            .lte(JsonData.of(price)))));
        }
        return () ->Query.of(q -> q.bool(boolQueryBuilder.build()));
    }
}
