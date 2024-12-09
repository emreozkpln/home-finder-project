import React from "react";
import { GiHistogram } from "react-icons/gi";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

type UserListingNumberProps = {
	listingNumber: number;
};

const UserListingNumber: React.FC<UserListingNumberProps> = ({ listingNumber }) => {
	return (
		<div className="bg-white rounded-xl flex gap-5 p-5 items-center justify-between shadow-lg w-full">
			<div className="flex flex-col gap-1">
				<div className="text-xl font-semibold text-[#35A0FF]">{listingNumber}</div>
				<div className="text-sm text-[#696B6F] font-light">All Listings</div>
				<div className="text-[#696B6F] flex gap-1 items-center font-light">
					<BsFillArrowUpRightCircleFill />
					<div>35.67%</div>
				</div>
			</div>
			<GiHistogram size={70} className="text-[#38A2FF]" />
		</div>
	);
};

export default UserListingNumber;
