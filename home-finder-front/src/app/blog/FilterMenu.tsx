"use client";
import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import Link from "next/link";
import { RiHome2Fill } from "react-icons/ri";

interface FilterMenuProps {
	params: { [key: string]: string | undefined };
}

const FilterMenu = ({ params }: FilterMenuProps) => {
	const [location, setLocation] = useState(params.location ? params.location : "");
	const [propertyType, setPropertyType] = useState("Apartment");
	const [price, setPrice] = useState(params.price ? params.price : 1000000);

	const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
		const { name, value } = e.target;
		if (name === "location") setLocation(value);
		else if (name === "propertyType") setPropertyType(value);
		else if (name === "price") setPrice(value ? parseInt(value) : 0);
	};

	return (
		<div>
			<Dialog>
				<DialogTrigger className="bg-[#2C7272] py-2 px-5 text-sm text-white rounded-xl shadow-xl">Filter</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Filter</DialogTitle>
						<DialogDescription>From here you can filter as you wish.</DialogDescription>
					</DialogHeader>
					<div className="flex flex-col gap-4 items-center justify-center">
						<div className="flex flex-col gap-2">
							<label className="text-sm text-[#121214]">Location</label>
							<input type="text" name="location" value={location} onChange={handleInputChange} className="py-2 px-4 rounded-lg border border-gray-300" placeholder="Enter location" />
						</div>

						<div className="flex flex-col gap-2 w-72">
							<label htmlFor="propertyType" className="text-sm text-[#121214]">
								Property Type
							</label>
							<div className="flex items-center bg-white border border-gray-300 rounded-md p-2">
								<select name="propertyType" id="propertyType" className="border-none outline-none flex-grow p-1" value={propertyType} onChange={handleInputChange}>
									<option value="Apartment">Apartment</option>
									<option value="DetachedHouse">House</option>
									<option value="Land">Land</option>
								</select>
								<RiHome2Fill className="text-gray-600 text-lg" />
							</div>
						</div>

						<div className="flex flex-col gap-2">
							<label className="text-sm text-[#121214]">Price</label>
							<input type="number" name="price" value={price} onChange={handleInputChange} className="py-2 px-4 rounded-lg border border-gray-300" placeholder="Enter max price" />
						</div>

						<DialogClose asChild>
							<Link href={`/blog?location=${location}&propertyType=${propertyType}&price=${price}`} className="flex justify-center bg-[#121214] text-white py-2 px-6 rounded-lg text-sm mt-4">
								Apply Filter
							</Link>
						</DialogClose>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default FilterMenu;
