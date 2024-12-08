"use client";
import Link from "next/link";
import React from "react";
import { HiOutlinePhone } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";

type UserDescriptionProps = {
	user: string;
	userEmail: string;
	propertyType: string;
};

const UserDescription: React.FC<UserDescriptionProps> = ({ user, userEmail, propertyType }) => {
	const sendEmail = () => {
		const email = `mailto:${userEmail}?subject=Your-Subject&body=Your-Message`;
		window.location.href = email;
	};
	return (
		<div className="bg-white border border-gray-100 shadow-xl rounded-xl p-4">
			<div className="flex flex-col gap-2">
				<div className="flex items-center gap-4">
					<div className="w-20 h-20 rounded-full">
						<img src="/user.jpeg" alt="User Icon" />
					</div>
					<div className="text-sm font-medium">
						<div>{user}</div>
						<Link href="/" className="text-[#899BFC]">
							View Profile
						</Link>
					</div>
				</div>
				<div className="text-sm leading-6 font-semibold">
					{user} is a company full of professional staff. You can always rely on us. Call us anytime if you would like to book viewing for any {propertyType}.
				</div>
				<div className="flex items-start gap-4 mt-1">
					<button className="border-2 border-[#5D75FB] rounded-lg text-sm text-[#5D75FB] py-1 px-4 gap-2 flex items-center justify-center font-semibold">
						<HiOutlinePhone />
						Call Now
					</button>
					<button
						className="border-2 border-[#5D75FB] rounded-lg text-sm text-[#5D75FB] py-1 px-4 gap-2 flex items-center justify-center font-semibold"
						onClick={() => {
							sendEmail();
						}}
					>
						<MdOutlineEmail />
						Email
					</button>
				</div>
			</div>
		</div>
	);
};

export default UserDescription;
