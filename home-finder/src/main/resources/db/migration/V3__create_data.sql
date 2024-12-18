

INSERT INTO _user (id, firstname, lastname, date_of_birth, email, password, account_locked, enabled, created_date, last_modified_date)
VALUES
    (1, 'John', 'Doe', '1985-06-15', 'john.doe@example.com', 'password123', FALSE, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 'Jane', 'Smith', '1990-09-25', 'jane.smith@example.com', 'password456', FALSE, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 'Michael', 'Johnson', '1975-03-10', 'michael.johnson@example.com', 'password789', FALSE, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (4, 'Emily', 'Davis', '1988-11-02', 'emily.davis@example.com', 'password101', FALSE, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (5, 'David', 'Brown', '1995-04-20', 'david.brown@example.com', 'password102', FALSE, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


INSERT INTO listing (id, address, city, district, price, description, property_type, user_id, created_date, last_modified_date, created_by, last_modified_by, listing_title, status)
VALUES
    (1, '123 Elm Street', 'CityA', 'District1', 300000, 'Beautiful detached house with a garden.', 'DetachedHouse', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1, 1, 'Beautiful Detached House', 'sale'),
    (2, '456 Oak Avenue', 'CityB', 'District2', 450000, 'Spacious detached house with a garage.', 'DetachedHouse', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2, 2, 'Spacious Detached House with Garage', 'sale'),
    (3, '789 Pine Road', 'CityC', 'District3', 550000, 'Detached house with a large garden.', 'DetachedHouse', 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3, 3, 'Detached House with Large Garden', 'sale'),
    (4, '101 Maple Lane', 'CityD', 'District4', 650000, 'Detached house with multiple rooms and a garden.', 'DetachedHouse', 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 4, 4, 'Detached House with Multiple Rooms', 'sale');

INSERT INTO listing (id, address, city, district, price, description, property_type, user_id, created_date, last_modified_date, created_by, last_modified_by, listing_title, status)
VALUES
    (5, '202 River Street', 'CityE', 'District5', 200000, 'Vacant land with zoning for residential use.', 'Land', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1, 1, 'Vacant Residential Land', 'sale'),
    (6, '303 Cedar Drive', 'CityF', 'District6', 350000, 'Land for sale, suitable for construction.', 'Land', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2, 2, 'Land for Construction', 'sale'),
    (7, '404 Birch Boulevard', 'CityG', 'District7', 420000, 'Land with deed status for commercial use.', 'Land', 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3, 3, 'Commercial Land', 'sale'),
    (8, '505 Willow Way', 'CityH', 'District8', 500000, 'Land in a prime location, zoning for residential.', 'Land', 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 4, 4, 'Prime Residential Land', 'sale');

INSERT INTO listing (id, address, city, district, price, description, property_type, user_id, created_date, last_modified_date, created_by, last_modified_by, listing_title, status)
VALUES
    (9, '1234 King Street', 'CityI', 'District9', 250000, '2-bedroom apartment with a balcony.', 'Apartment', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1, 1, '2-Bedroom Apartment with Balcony', 'sale'),
    (10, '5678 Queen Avenue', 'CityJ', 'District10', 300000, 'Spacious 3-bedroom apartment on the top floor.', 'Apartment', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2, 2, 'Spacious 3-Bedroom Top Floor Apartment', 'sale'),
    (11, '7890 Prince Road', 'CityK', 'District11', 400000, 'Apartment with 3 bedrooms and 2 bathrooms.', 'Apartment', 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3, 3, '3-Bedroom Apartment with 2 Bathrooms', 'sale'),
    (12, '10112 Duke Lane', 'CityL', 'District12', 550000, 'Luxury apartment with modern amenities.', 'Apartment', 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 4, 4, 'Luxury Apartment with Modern Amenities', 'sale');


INSERT INTO detached_house (id, land_size, number_of_rooms, number_of_bathrooms, has_garden, has_garage)
VALUES
    (1, 500, 4, 3, TRUE, TRUE),
    (2, 600, 5, 4, TRUE, TRUE),
    (3, 700, 6, 4, TRUE, TRUE),
    (4, 800, 6, 5, TRUE, TRUE);


INSERT INTO land (id, land_size, zoning_status, is_suitable_for_construction, deed_status)
VALUES
    (5, 1000, 'Residential', TRUE, 'Clear'),
    (6, 1200, 'Residential', TRUE, 'Clear'),
    (7, 1500, 'Commercial', FALSE, 'Clear'),
    (8, 2000, 'Residential', TRUE, 'Clear');


INSERT INTO apartment (id, area_with_metres, floor_number, total_floors, number_of_rooms, number_of_bathrooms, has_balcony, heating_type)
VALUES
    (9, 300, 1, 5, 2, 1, TRUE, 'Central Heating'),
    (10, 400, 2, 5, 3, 2, TRUE, 'Electric Heating'),
    (11, 500, 1, 4, 3, 2, FALSE, 'Gas Heating'),
    (12, 200, 1, 4, 4, 3, TRUE, 'Central Heating');