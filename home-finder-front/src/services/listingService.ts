export default async function getThreeListing(){
    const response = await fetch("http://localhost:8088/api/v1/listing/three-listing")
    return await response.json()
}