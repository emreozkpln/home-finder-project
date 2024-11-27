import React from "react";
import { MdAddHomeWork } from "react-icons/md";

const Header = () => {
	return (
		<div className="bg-[#E2F4FE]">
			<div className="flex py-5 justify-between items-center px-32">
				<div className="flex gap-2 items-center">
					<MdAddHomeWork size={18} className="text-[#0627F8]" />
					<div className="font-bold">Home Finder</div>
				</div>
				<div className="flex gap-5">
					<div>Home</div>
					<div>About Us</div>
					<div>Properties</div>
					<div>Agents</div>
				</div>
				<button className="px-7 py-3 border-2 font-bold border-[#101011] text-sm rounded-md">Find A House</button>
			</div>
		</div>
	);
};

export default Header;
