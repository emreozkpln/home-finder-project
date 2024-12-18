import React from "react";
import UserInformation from "./UserInformation";
import UserListingNumber from "./UserListingNumber";
import UserListing from "./UserListing";
import { cookies } from "next/headers";
import { getUser, getUserFavorites } from "@/services/userService";
import { ListingWithPagination } from "@/lib/types";
import UserFavoriteNumber from "./UserFavoriteNumber";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserFavoriteListing from "./UserFavoriteListing";
import Link from "next/link";

type ProfilePageProps = {
	searchParams?: { [key: string]: string | undefined };
};

const ProfilePage: React.FC<ProfilePageProps> = async ({ searchParams }) => {
	const currentSearchParams = await searchParams;
	const currentPage = parseInt((currentSearchParams?.page as string) || "0");
	const currentView = currentSearchParams?.view;
	const token = (await cookies()).get("session")?.value;
	const data: ListingWithPagination = await getUser(token, currentPage);
	const favorite: ListingWithPagination = await getUserFavorites(token, currentPage);

	const renderContent = () => {
		if (currentView === "listing") {
			return <UserListing data={data} currentPage={currentPage} />;
		} else if (currentView === "favorites") {
			return <UserFavoriteListing favorite={favorite} currentPage={currentPage} />;
		} else {
			return <UserListing data={data} currentPage={currentPage} />;
		}
	};

	return (
		<div className="bg-[#F0F2F5] min-h-screen">
			<div className="max-w-7xl mx-auto flex gap-10 py-10">
				<UserInformation data={data.totalElements} favorite={favorite.totalElements} />
				<div className="flex flex-col gap-5">
					<div className="grid grid-cols-2 gap-5 w-full">
						<Link href="/profile?view=listing" className="flex items-center justify-center bg-white border border-gray-200 rounded-lg py-2">
							All Listings
						</Link>
						<Link href="/profile?view=favorites" className="flex items-center justify-center bg-white border border-gray-200 rounded-lg">
							Favorites
						</Link>
					</div>
					<div>{renderContent()}</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
