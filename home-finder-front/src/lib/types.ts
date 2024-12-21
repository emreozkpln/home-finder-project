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
    imageUrl:string[]
}

export type ListingWithDetail = {
    id: number
    listingTitle:string;
    status:string
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
    imageUrl:string[]
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

export type Apartment = {
    token:string,
    listingTitle:string,
    status:string,
    address:string,
    city:string,
    district:string,
    price:number,
    description:string | "",
    propertyType:string,
    areaWithMetres:number,
    floorNumber:number,
    totalFloors:number,
    numberOfRooms:number,
    numberOfBathrooms:number,
    hasBalcony:boolean,
    heatingType:string
}

export type DetachedHouse = {
    token:string,
    listingTitle:string,
    status:string,
    address:string,
    city:string,
    district:string,
    price:number,
    description:string | "",
    propertyType:string,
    landSize:number,
    numberOfRooms:number,
    numberOfBathrooms:number,
    hasGarage:boolean,
    hasGarden:boolean
}

export type Land = {
    token:string,
    listingTitle:string,
    status:string,
    address:string,
    city:string,
    district:string,
    price:number,
    description:string | "",
    propertyType:string,
    zoningStatus:string,
    deedStatus:string,
    landSize:number,
    isSuitableForConstruction:boolean
}