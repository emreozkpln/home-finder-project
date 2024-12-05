import Link from "next/link";
import React from "react";
import { MdAddHomeWork } from "react-icons/md";

const Header = () => {
	return (
		<div className="bg-[#E2F4FE] h-[88px]">
			<div className="flex py-5 justify-between items-center px-32">
				<div className="flex gap-2 items-center">
					<MdAddHomeWork size={18} className="text-[#0627F8]" />
					<Link href="/" className="font-bold">
						Home Finder
					</Link>
				</div>
				<div className="flex gap-5">
					<Link href="/">Home</Link>
					<div>About Us</div>
					<div>Properties</div>
					<div>Agents</div>
				</div>
				<div className="flex gap-3">
					<button className="px-7 py-3 border-2 font-bold border-[#101011] text-sm rounded-md">Sign in</button>
					<button className="px-7 py-3 border-2 font-bold border-[#101011] text-sm rounded-md">Sign out</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
