
DROP TABLE IF EXISTS DetachedHouse;
DROP TABLE IF EXISTS Land;
DROP TABLE IF EXISTS Apartment;
DROP TABLE IF EXISTS ListingImage;
DROP TABLE IF EXISTS Listing;
DROP TABLE IF EXISTS _user;

CREATE TABLE IF NOT EXISTS _user (
                                     id SERIAL PRIMARY KEY,
                                     firstname VARCHAR(255),
    lastname VARCHAR(255),
    dateOfBirth DATE,
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    accountLocked BOOLEAN,
    enabled BOOLEAN,
    createdDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    lastModifiedDate TIMESTAMP
    );

CREATE TABLE IF NOT EXISTS ListingImage (
                                            id SERIAL PRIMARY KEY,
                                            url VARCHAR(255),
    keyName VARCHAR(255),
    listing_id INT NOT NULL,
    FOREIGN KEY (listing_id) REFERENCES Listing(id) ON DELETE CASCADE
    );


CREATE TABLE IF NOT EXISTS Listing (
                                       id SERIAL PRIMARY KEY,
                                       listingTitle VARCHAR(255),
    address VARCHAR(255),
    city VARCHAR(255),
    district VARCHAR(255),
    price DOUBLE PRECISION,
    status VARCHAR(255),
    description TEXT,
    propertyType VARCHAR(255),
    user_id INT,
    createdDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    lastModifiedDate TIMESTAMP,
    createdBy INT NOT NULL,
    lastModifiedBy INT,
    FOREIGN KEY (user_id) REFERENCES _user(id)
    );


CREATE TABLE IF NOT EXISTS DetachedHouse (
                                             id INT PRIMARY KEY,
                                             landSize DOUBLE PRECISION,
                                             numberOfRooms INT,
                                             numberOfBathrooms INT,
                                             hasGarden BOOLEAN,
                                             hasGarage BOOLEAN,
                                             FOREIGN KEY (id) REFERENCES Listing(id)
    );

-- Land tablosu oluşturuluyor
CREATE TABLE IF NOT EXISTS Land (
                                    id INT PRIMARY KEY,
                                    landSize DOUBLE PRECISION,
                                    zoningStatus VARCHAR(255),
    isSuitableForConstruction BOOLEAN,
    deedStatus VARCHAR(255),
    FOREIGN KEY (id) REFERENCES Listing(id)
    );

-- Apartment tablosu oluşturuluyor
CREATE TABLE IF NOT EXISTS Apartment (
                                         id INT PRIMARY KEY,
                                         areaWithMetres DOUBLE PRECISION,
                                         floorNumber INT,
                                         totalFloors INT,
                                         numberOfRooms INT,
                                         numberOfBathrooms INT,
                                         hasBalcony BOOLEAN,
                                         heatingType VARCHAR(255),
    FOREIGN KEY (id) REFERENCES Listing(id)
    );

CREATE TABLE IF NOT EXISTS Token (
                                     id SERIAL PRIMARY KEY,
                                     token VARCHAR(255),
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    expiresAt TIMESTAMP,
    validatedAt TIMESTAMP,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES _user(id)
    );

CREATE TABLE IF NOT EXISTS UserFavorites (
                                             user_id INT NOT NULL,
                                             listing_id INT NOT NULL,
                                             PRIMARY KEY (user_id, listing_id),
    FOREIGN KEY (user_id) REFERENCES _user(id),
    FOREIGN KEY (listing_id) REFERENCES Listing(id)
    );
