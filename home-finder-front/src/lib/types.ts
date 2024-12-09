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

export type Listing = {
    id: number
    price: number;
	address: string;
	city: string;
	district: string;
	createdDate: number[];
	description: string;
	propertyType: string;
    user: string
    userEmail: string
	additionalDetail: {}
}

export type ListingWithDetail = {
    id: number
    price: number;
	address: string;
	city: string;
	district: string;
	createdDate: number[];
	description: string;
	propertyType: string;
    user: string
    userEmail: string
	additionalDetail: ApartmentListing | DetachedHouseListing | LandListing;
}

export type ListingWithPagination = {
    content: Listing[];
	first: boolean;
	last: boolean;
	number: number;
	size: number;
	totalElements: number;
	totalPages: number;
}