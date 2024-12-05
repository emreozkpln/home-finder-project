export interface listing {
    additionalDetail: string[],
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
    propertyType: string,
    user: string
}

export interface GetAllListingResponse {
    content: listing[];
    first: boolean;
    last: boolean;
    number: number;
    size: number;
    totalElements: number;
    totalPages: number;
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

