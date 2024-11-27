import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiHome2Fill } from "react-icons/ri";
import { FaTurkishLiraSign } from "react-icons/fa6";

const SearchBar = () => {
	return (
		<div style={{ background: "linear-gradient(to bottom, #E2F4FE 50%, white 50%)" }}>
			<div className="bg-white border border-gray-200 shadow-lg rounded-lg px-3 py-7 flex flex-col gap-4 items-center justify-center max-w-6xl mx-auto">
				<div className="font-semibold">Search for available properties</div>
				<div className="flex gap-5">
					<div className="flex items-center bg-white border border-gray-300 rounded-md p-2 w-72">
						<input className="border-none outline-none flex-grow p-1 placeholder:text-black" type="text" placeholder="Location" />
						<FaMapMarkerAlt className="text-gray-600 text-lg" />
					</div>
					<div className="flex items-center bg-white border border-gray-300 rounded-md p-2 w-72">
						<select className="border-none outline-none flex-grow p-1 ">
							<option value="">Property Type</option>
							<option value="apartment">Apartment</option>
							<option value="house">House</option>
							<option value="villa">Villa</option>
						</select>
						<RiHome2Fill className="text-gray-600 text-lg" />
					</div>
					<div className="flex items-center bg-white border border-gray-300 rounded-md p-2 w-72">
						<input className="border-none outline-none flex-grow p-1 placeholder:text-black" type="text" placeholder="Budget" />
						<FaTurkishLiraSign className="text-gray-600 text-lg" />
					</div>
					<button className="bg-black px-7 py-2 text-white rounded-md">Search Now</button>
				</div>
			</div>
		</div>
	);
};

export default SearchBar;
