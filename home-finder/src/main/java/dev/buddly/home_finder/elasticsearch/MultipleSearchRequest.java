package dev.buddly.home_finder.elasticsearch;

import java.util.Map;

public record MultipleSearchRequest(
        Map<String,String> fieldValues
) {
}
