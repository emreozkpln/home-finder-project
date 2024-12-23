import Link from "next/link";
import React from "react";
import { MdAddHomeWork } from "react-icons/md";
import HeadDropdownMenu from "./HeadDropdownMenu";
import { cookies } from "next/headers";
import { decrypt } from "@/lib/session";

const Header = async () => {
	const token = (await cookies()).get("session")?.value;
	const payload = token ? await decrypt(token) : undefined;

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
					<Link href="/blog">Listings</Link>
					<Link href="/add-listing">Free Listing</Link>
				</div>
				{token && token ? (
					<div className="w-12 h-12 flex items-center">
						<HeadDropdownMenu username={(payload?.fullname as string) || undefined} />
					</div>
				) : (
					<div className="flex gap-3">
						<Link href="/login">
							<button className="px-7 py-3 border-2 font-bold border-[#101011] text-sm rounded-md">Sign in</button>
						</Link>
						<Link href="/register">
							<button className="px-7 py-3 border-2 font-bold border-[#101011] text-sm rounded-md">Sign up</button>
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
