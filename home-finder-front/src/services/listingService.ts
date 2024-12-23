import { Apartment, DetachedHouse, Land, Listing, ListingWithDetail, ListingWithPagination } from "@/lib/types"

export default async function getThreeListing(){
    const response = await fetch("http://localhost:8088/api/v1/listing/three-listing")
    const data: Listing = await response.json()
    return data
}

export async function getAllPostByCreatedDate(page:number,perPage:number,sortDirection:string){
    const res = await fetch(`http://localhost:8088/api/v1/listing?sortDirection=${sortDirection}&page=${page}&size=${perPage}`)
    const data: ListingWithPagination = await res.json()
    return data
}

export async function getAllPostByPrice(page:number,perPage:number,sortDirection:string){
    const res = await fetch(`http://localhost:8088/api/v1/listing/des/price?sortDirection=${sortDirection}&page=${page}&size=${perPage}`)
    const data: ListingWithPagination = await res.json()
    return data
}

export async function getPostById(id:string){
    const res = await fetch(`http://localhost:8088/api/v1/listing/id/${id}`)
    const data: ListingWithDetail = await res.json()
    return data
}

async function indexData(){
    const query = await fetch("http://localhost:8088/api/v1/listing/compare")
    const data = query.json()
    return data
}
export async function getPostByLocationPropertyTypeBudget(fieldValues: any) {
    await indexData()
    const queryParams = new URLSearchParams(fieldValues).toString();
    
    const url = `http://localhost:8088/api/v1/listing/search-parametres?${queryParams}`;

    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await res.json();
    return data;
}

export async function getThreePostByPropertyType(propertyType:any){
    const res = await fetch(`http://localhost:8088/api/v1/listing/three-listing/${propertyType}`)
    const data: Listing = await res.json()
    return data
}

export async function addApartment(
    {token,
    listingTitle,
    status,
    address,
    city,
    district,
    price,
    description,
    propertyType,
    areaWithMetres,
    floorNumber,
    totalFloors,
    numberOfRooms,
    numberOfBathrooms,
    hasBalcony,
    heatingType}:Apartment
){
    const response = await fetch('http://localhost:8088/api/v1/listing/add/apartment',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
            listingTitle,
            status,
            address,
            city,
            district,
            price,
            description,
            propertyType,
            areaWithMetres,
            floorNumber,
            totalFloors,
            numberOfRooms,
            numberOfBathrooms,
            hasBalcony,
            heatingType
        })
    })
    const data = await response.json()
    return data
}

export async function addDetachedHouse(
    {token,
    listingTitle,
    status,
    address,
    city,
    district,
    price,
    description,
    propertyType,
    landSize,
    numberOfRooms,
    numberOfBathrooms,
    hasGarage,
    hasGarden
}:DetachedHouse
){
    const response = await fetch('http://localhost:8088/api/v1/listing/add/detached-house',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
            listingTitle,
            status,
            address,
            city,
            district,
            price,
            description,
            propertyType,
            landSize,
            numberOfRooms,
            numberOfBathrooms,
            hasGarage,
            hasGarden
        })
    })
    const data = await response.json()
    return data
}

export async function addLand(
    {token,
    listingTitle,
    status,
    address,
    city,
    district,
    price,
    description,
    propertyType,
    landSize,
    zoningStatus,
    deedStatus,
    isSuitableForConstruction
}:Land
){
    const response = await fetch('http://localhost:8088/api/v1/listing/add/land',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
            listingTitle,
            status,
            address,
            city,
            district,
            price,
            description,
            propertyType,
            landSize,
            zoningStatus,
            deedStatus,
            isSuitableForConstruction
        })
    })
    const data = await response.json()
    return data
}

export async function deleteListing(id:number,token:string | undefined){
    const response = await fetch(`http://localhost:8088/api/v1/listing/delete/${id}`,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
    const data = await response.json()
    return data
}