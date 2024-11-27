package dev.buddly.home_finder.elasticsearch;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import jakarta.persistence.Id;
import lombok.*;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;

import java.io.Serializable;
import java.time.LocalDateTime;

@Document(indexName = "listing_index")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ListingDocument implements Serializable {

    @Id
    private String id;

    @Field(type = FieldType.Text)
    private String address;

    @Field(type = FieldType.Text)
    private String city;

    @Field(type = FieldType.Text)
    private String district;

    @Field(type = FieldType.Double)
    private double price;

    @Field(type = FieldType.Text)
    private String description;

    @Field(name = "property_type",type = FieldType.Keyword)
    private String propertyType;

    @Field(name = "username",type = FieldType.Keyword)
    private String username;

    @Field(name = "created_date", type = FieldType.Date)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    private LocalDateTime createdDate;

    @Field(name = "last_modified_date", type = FieldType.Date)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    private LocalDateTime lastModifiedDate;

    @Field(name = "created_by", type = FieldType.Integer)
    private Integer createdBy;

    @Field(name = "last_modified_by", type = FieldType.Integer)
    private Integer lastModifiedBy;
}

