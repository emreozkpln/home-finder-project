import { getDecryptedTokenProperties } from "@/util/extractCookie";
import Link from "next/link";
import React from "react";

const UserInformation = async () => {
	const { sub, fullname } = await getDecryptedTokenProperties(["sub", "fullname"]);
	return (
		<div className="bg-white rounded-3xl shadow-lg w-[400px]">
			<div className="flex flex-col gap-4 items-center justify-center p-8">
				<img src="/home.png" alt="Home" className="w-28 h-28 rounded-full" />
				<div className="text-lg font-extrabold">{fullname}</div>
				<div className="bg-[#EBF8EF] text-[#87D5A0] py-1 px-3 text-xs font-semibold rounded-xl">New Client</div>
				<Link href="/add-listing">
					<button className="py-2 px-6 text-[#EEF7FF] bg-[#38A2FF] rounded-xl text-sm font-medium">Add New Listing</button>
				</Link>
				<div className="w-full bg-[#F9FAFC] py-2 px-5 flex flex-col gap-1 rounded-2xl">
					<div className="text-xs text-[#B6BBC2]">Email</div>
					<div className="text-[#353535] text-sm font-medium">{sub}</div>
				</div>
				<div className="w-full bg-[#F9FAFC] py-2 px-5 flex flex-col gap-1 rounded-2xl">
					<div className="text-xs text-[#B6BBC2]">Email</div>
					<div className="text-[#353535] text-sm font-medium">{sub}</div>
				</div>
				<div className="w-full bg-[#F9FAFC] py-2 px-5 flex flex-col gap-1 rounded-2xl">
					<div className="text-xs text-[#B6BBC2]">Email</div>
					<div className="text-[#353535] text-sm font-medium">{sub}</div>
				</div>
			</div>
		</div>
	);
};

export default UserInformation;
