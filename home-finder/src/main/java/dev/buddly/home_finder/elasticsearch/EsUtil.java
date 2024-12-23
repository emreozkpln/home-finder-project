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

    public static Supplier<Query> createBoolQuery(String location,String propertyType,Double price){
        BoolQuery.Builder boolQueryBuilder = new BoolQuery.Builder();

        if (propertyType != null) {
            boolQueryBuilder.must(Query.of(q -> q
                    .match(m -> m
                            .field("propertyType")
                            .query(propertyType))));
        }

        if (location != null) {
            boolQueryBuilder.should(Query.of(q -> q
                    .match(m -> m
                            .field("city")
                            .query(location)
                            .analyzer("edge_ngram_analyzer"))));

            boolQueryBuilder.should(Query.of(q -> q
                    .fuzzy(f -> f
                            .field("city")
                            .value(location)
                            .fuzziness("AUTO"))));
        }

        if (price != null) {
            boolQueryBuilder.must(Query.of(q -> q
                    .range(r -> r
                            .field("price")
                            .gte(JsonData.of(0))
                            .lte(JsonData.of(price)))));
        }
        System.out.println("boolQueryBuilder" + boolQueryBuilder);
        return () -> Query.of(q -> q.bool(boolQueryBuilder.build()));
    }
}
