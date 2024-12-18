"use server"
import { addApartment, addDetachedHouse, addLand } from "@/services/listingService";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {z} from "zod"

const apartmentSchema = z.object({
    listingTitle: z.string().min(2, { message: "listing title must be at least 2 characters long." }).max(50, { message: "listing title must be less than 50 characters." }).trim(),
    status: z.string().min(1, "Status is required"),
	address: z.string().min(2, { message: "address must be at least 2 characters long." }).max(50, { message: "address must be less than 50 characters." }).trim(),
	city: z.string().min(2, { message: "city must be at least 2 characters long." }).max(50, { message: "city must be less than 50 characters." }).trim(),
	district: z.string().min(2, { message: "district must be at least 2 characters long." }).max(50, { message: "district must be less than 50 characters." }).trim(),
	price: z.preprocess((a) => parseInt(z.string().parse(a),10),z.number().min(0)),
    description: z.string().trim().optional(),
    propertyType: z.string().min(1,"propertyType must be at least 2 characters long."),
    areaWithMetres: z.preprocess((a) => parseInt(z.string().parse(a),10),z.number().min(0)),
    floorNumber: z.preprocess((a) => parseInt(z.string().parse(a),10),z.number().min(0)),
    totalFloors: z.preprocess((a) => parseInt(z.string().parse(a),10),z.number().min(0)),
    numberOfRooms: z.preprocess((a) => parseInt(z.string().parse(a),10),z.number().min(0)),
    numberOfBathrooms: z.preprocess((a) => parseInt(z.string().parse(a),10),z.number().min(0)),
    hasBalcony: z.coerce.boolean(),
    heatingType: z.string().min(1, "Heating type is required")
});

export async function apartmentSaving(prevState:any,formData:FormData){
    const result = apartmentSchema.safeParse(Object.fromEntries(formData))
    if(!result.success){
        return {
            errors: result.error.flatten().fieldErrors
        }
    }
    const token = (await cookies()).get("session")?.value
    if (token == undefined) {
        redirect("/login")
    }
    const {listingTitle,status,address,city,district,price,description,propertyType,areaWithMetres,floorNumber,totalFloors,numberOfRooms,numberOfBathrooms,hasBalcony,heatingType} = result.data
    const apiResponse = await addApartment({token,listingTitle,status,address,city,district,price,description,propertyType,areaWithMetres,floorNumber,totalFloors,numberOfRooms,numberOfBathrooms,hasBalcony,heatingType})
    if(apiResponse.status == 'CREATED'){
        redirect("/profile")
    }else{
        console.log("Hata");
    }
}

const detachedHouseSchema = z.object({
    listingTitle: z.string().min(2, { message: "listing title must be at least 2 characters long." }).max(50, { message: "listing title must be less than 50 characters." }).trim(),
    status: z.string().min(1, "Status is required"),
	address: z.string().min(2, { message: "address must be at least 2 characters long." }).max(50, { message: "address must be less than 50 characters." }).trim(),
	city: z.string().min(2, { message: "city must be at least 2 characters long." }).max(50, { message: "city must be less than 50 characters." }).trim(),
	district: z.string().min(2, { message: "district must be at least 2 characters long." }).max(50, { message: "district must be less than 50 characters." }).trim(),
	price: z.preprocess((a) => parseInt(z.string().parse(a),10),z.number().min(0)),
    description: z.string().trim().optional(),
    propertyType: z.string().min(1,"propertyType must be at least 2 characters long."),
    landSize: z.preprocess((a) => parseInt(z.string().parse(a),10),z.number().min(0)),
    numberOfRooms: z.preprocess((a) => parseInt(z.string().parse(a),10),z.number().min(0)),
    numberOfBathrooms: z.preprocess((a) => parseInt(z.string().parse(a),10),z.number().min(0)),
    hasGarage: z.coerce.boolean(),
    hasGarden: z.coerce.boolean()
});

export async function detachedHouseSaving(prevState:any,formData:FormData){
    const result = detachedHouseSchema.safeParse(Object.fromEntries(formData))
    if(!result.success){
        return {
            errors: result.error.flatten().fieldErrors
        }
    }
    const token = (await cookies()).get("session")?.value
    if (token == undefined) {
        redirect("/login")
    }
    const {listingTitle,status,address,city,district,price,description,propertyType,landSize,numberOfRooms,numberOfBathrooms,hasGarage,hasGarden} = result.data
    const apiResponse = await addDetachedHouse({token,listingTitle,status,address,city,district,price,description,propertyType,landSize,numberOfRooms,numberOfBathrooms,hasGarage,hasGarden})
    if(apiResponse.status == 'CREATED'){
        redirect("/profile")
    }else{
        console.log("Hata");
    }
}

const landSchema = z.object({
    listingTitle: z.string().min(2, { message: "listing title must be at least 2 characters long." }).max(50, { message: "listing title must be less than 50 characters." }).trim(),
    status: z.string().min(1, "Status is required"),
	address: z.string().min(2, { message: "address must be at least 2 characters long." }).max(50, { message: "address must be less than 50 characters." }).trim(),
	city: z.string().min(2, { message: "city must be at least 2 characters long." }).max(50, { message: "city must be less than 50 characters." }).trim(),
	district: z.string().min(2, { message: "district must be at least 2 characters long." }).max(50, { message: "district must be less than 50 characters." }).trim(),
	price: z.preprocess((a) => parseInt(z.string().parse(a),10),z.number().min(0)),
    description: z.string().trim().optional(),
    propertyType: z.string().min(1,"propertyType must be at least 2 characters long."),
    landSize: z.preprocess((a) => parseInt(z.string().parse(a),10),z.number().min(0)),
    zoningStatus: z.string().min(1, "Zoning Status is required"),
    deedStatus: z.string().min(1, "Deed Status is required"),
    isSuitableForConstruction: z.coerce.boolean()
});

export async function landSaving(prevState:any,formData:FormData){
    const result = landSchema.safeParse(Object.fromEntries(formData))
    if(!result.success){
        return {
            errors: result.error.flatten().fieldErrors
        }
    }
    const token = (await cookies()).get("session")?.value
    if (token == undefined) {
        redirect("/login")
    }
    const {listingTitle,status,address,city,district,price,description,propertyType,landSize,zoningStatus,deedStatus,isSuitableForConstruction} = result.data
    const apiResponse = await addLand({token,listingTitle,status,address,city,district,price,description,propertyType,landSize,zoningStatus,deedStatus,isSuitableForConstruction})
    if(apiResponse.status == 'CREATED'){
        redirect("/profile")
    }else{
        console.log("Hata");
    }
}