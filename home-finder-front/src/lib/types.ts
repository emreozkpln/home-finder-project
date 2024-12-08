export type PropertyType = "Apartment" | "DetachedHouse" | "Land";
type AdditionalDetailByPropertyType<T extends PropertyType> = 
    T extends "Apartment" ? (ApartmentListing)[] :
    T extends "DetachedHouse" ? (DetachedHouseListing)[] :
    T extends "Land" ? (LandListing)[] :
    never;

export interface Listing<T extends PropertyType> {
    additionalDetail: AdditionalDetailByPropertyType<T>;
    address: string,
    city: string,
    createdBy: number,
    createdDate: number[],
    description: string,
    district: string,
    id: number,
    lastModifiedBy: number,
    lastModifiedDate: number[],
    price: number,
    propertyType: T,
    user: string
}

export type ApartmentListing = {
    floorNumber: number,
    hasBalcony: boolean,
    heatingType: string,
    numberOfBathrooms: number,
    numberOfRooms: number,
    totalFloors: number
}

export type DetachedHouseListing = {
    hasGarage: boolean,
    hasGarden: boolean,
    landSize: number,
    numberOfBathrooms: number
    numberOfRooms: number,
}

export type LandListing = {
    deedStatus: string,
    isSuitableForConstruction: boolean,
    landSize: number,
    zoningStatus: string,
}

