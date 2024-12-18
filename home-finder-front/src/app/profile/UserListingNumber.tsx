import React from "react";

type UserListingNumberProps = {
	listingNumber: number;
};

const UserListingNumber: React.FC<UserListingNumberProps> = ({ listingNumber }) => {
	return (
		<div className="bg-white rounded-xl flex gap-5 p-5 items-center justify-between shadow-lg w-full">
			<div className="flex flex-col gap-1">
				<div className="text-xl font-semibold text-[#35A0FF]">{listingNumber}</div>
				<div className="text-sm text-[#696B6F] font-light">Listings</div>
			</div>
		</div>
	);
};

export default UserListingNumber;
