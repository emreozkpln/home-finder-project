import { Listing, ListingWithDetail, ListingWithPagination } from "@/lib/types"

export default async function getThreeListing(){
    const response = await fetch("http://localhost:8088/api/v1/listing/three-listing")
    const data: Listing = await response.json()
    return data
}

export async function getAllPost(page:number,perPage:number){
    const res = await fetch(`http://localhost:8088/api/v1/listing?page=${page}&size=${perPage}`)
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
    const url = `http://localhost:8088/api/v1/listing/search?${queryParams}`;

    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data: Listing = await res.json();
    return data;
}

export async function getThreePostByPropertyType(propertyType:any){
    const res = await fetch(`http://localhost:8088/api/v1/listing/three-listing/${propertyType}`)
    const data: Listing = await res.json()
    return data
}