import React from "react";

type UserFavoriteNumberProps = {
	listingNumber: number;
};

const UserFavoriteNumber: React.FC<UserFavoriteNumberProps> = ({ listingNumber }) => {
	return (
		<div className="bg-white rounded-xl flex gap-5 p-5 items-center justify-between shadow-lg w-full">
			<div className="flex flex-col gap-1">
				<div className="text-xl font-semibold text-[#ff6435]">{listingNumber}</div>
				<div className="text-sm text-[#696B6F] font-light">Favorites</div>
			</div>
		</div>
	);
};

export default UserFavoriteNumber;
