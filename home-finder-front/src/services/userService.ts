export async function getUser(token:string | undefined,page:number){
    const response = await fetch(`http://localhost:8088/api/v1/listing/user?page=${page}`,{
        headers:{
            'Authorization': 'Bearer ' + token
        }
    })
    const data = await response.json()
    return data
}

export async function getUserFavorites(token:string | undefined,page:number){
    const response = await fetch(`http://localhost:8088/api/v1/favorite?page=${page}`,{
        headers:{
            'Authorization': 'Bearer ' + token
        }
    })
    const data = await response.json()
    return data
}

export async function addFavorites(token:string | undefined, id:number){
    const response = await fetch(`http://localhost:8088/api/v1/favorite/add/${id}`,{
        method: "POST",
        headers:{
            'Authorization': 'Bearer ' + token
        }
    })
    const data = await response.json()
    return data
}

export async function removeFavorites(token:string | undefined, id:number){
    const response = await fetch(`http://localhost:8088/api/v1/favorite/remove/${id}`,{
        method: 'DELETE',
        headers:{
            'Authorization': 'Bearer ' + token
        }
    })
    const data = await response.json()
    return data
}

export async function addImages(formData:FormData,id:number){
    try{
        const response = await fetch(`http://localhost:8088/api/v1/image/upload/${id}`, {
            method: "POST",
            body: formData,
        });
        return response
    } catch (error) {
        console.error("Upload error:", error);
    }
}