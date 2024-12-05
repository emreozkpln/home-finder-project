"use client";
import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiHome2Fill } from "react-icons/ri";
import { FaTurkishLiraSign } from "react-icons/fa6";
import { getPostByLocationPropertyTypeBudget } from "@/services/listingService";

const SearchBar = () => {
	const [fieldValues, setFieldValues] = useState({
		city: "",
		propertyType: "Apartment",
		price: "",
	});
	const handleInputChange = (e: any) => {
		const { name, value } = e.target;
		setFieldValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const searchParams: Record<string, any> = {};
		if (fieldValues.city) searchParams.city = fieldValues.city;
		if (fieldValues.propertyType) searchParams.propertyType = fieldValues.propertyType;
		if (fieldValues.price) searchParams.price = fieldValues.price;
		const data = await getPostByLocationPropertyTypeBudget(searchParams);
		console.log(data);
	};

	return (
		<div style={{ background: "linear-gradient(to bottom, #E2F4FE 50%, white 50%)" }}>
			<div className="bg-white border border-gray-200 shadow-lg rounded-lg px-3 py-7 flex flex-col gap-4 items-center justify-center max-w-6xl mx-auto">
				<div className="font-semibold">Search for available properties</div>
				<form onSubmit={handleSubmit} className="flex gap-5">
					<div className="flex items-center bg-white border border-gray-300 rounded-md p-2 w-72">
						<input name="city" className="border-none outline-none flex-grow p-1 placeholder:text-black" type="text" placeholder="Location" value={fieldValues.city} onChange={handleInputChange} />
						<FaMapMarkerAlt className="text-gray-600 text-lg" />
					</div>

					<div className="flex items-center bg-white border border-gray-300 rounded-md p-2 w-72">
						<select name="propertyType" className="border-none outline-none flex-grow p-1" value={fieldValues.propertyType} onChange={handleInputChange}>
							<option value="Apartment">Apartment</option>
							<option value="DetachedHouse">House</option>
							<option value="Land">Villa</option>
						</select>
						<RiHome2Fill className="text-gray-600 text-lg" />
					</div>

					<div className="flex items-center bg-white border border-gray-300 rounded-md p-2 w-72">
						<input name="price" className="border-none outline-none flex-grow p-1 placeholder:text-black" type="number" placeholder="Budget" value={fieldValues.price} onChange={handleInputChange} />
						<FaTurkishLiraSign className="text-gray-600 text-lg" />
					</div>

					<button className="bg-black px-7 py-2 text-white rounded-md">Search Now</button>
				</form>
			</div>
		</div>
	);
};

export default SearchBar;
