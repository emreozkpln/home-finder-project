import React from "react";
import UserInformation from "./UserInformation";
import UserListingNumber from "./UserListingNumber";
import UserListing from "./UserListing";
import { cookies } from "next/headers";
import { getUser } from "@/services/userService";
import { ListingWithPagination } from "@/lib/types";

type ProfilePageProps = {
	searchParams?: { [key: string]: string | undefined };
};

const ProfilePage: React.FC<ProfilePageProps> = async ({ searchParams }) => {
	const currentSearchParams = await searchParams;
	const currentPage = parseInt((currentSearchParams?.page as string) || "0");
	const token = (await cookies()).get("session")?.value;
	const data: ListingWithPagination = await getUser(token, currentPage);

	return (
		<div className="bg-[#F0F2F5] min-h-screen">
			<div className="max-w-7xl mx-auto flex gap-10 py-10">
				<UserInformation />
				<div className="flex flex-col gap-4 items-center">
					<div className="flex gap-8 justify-between items-center w-full">
						<UserListingNumber listingNumber={data.totalElements} />
						<UserListingNumber listingNumber={data.totalElements} />
					</div>
					<UserListing data={data} currentPage={currentPage} />
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
