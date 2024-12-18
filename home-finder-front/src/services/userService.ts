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