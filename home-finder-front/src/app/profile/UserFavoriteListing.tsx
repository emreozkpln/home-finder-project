import FavoriteButton from "@/components/FavoriteButton";
import { PaginationWithLinks } from "@/components/ui/pagination-with-links";
import { Listing, ListingWithPagination } from "@/lib/types";
import { formatDate } from "@/util/formatDate";
import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaTurkishLiraSign } from "react-icons/fa6";

type UserFavoriteListingProps = {
	favorite: ListingWithPagination;
	currentPage: number;
};
const UserFavoriteListing: React.FC<UserFavoriteListingProps> = async ({ favorite, currentPage }) => {
	const token = (await cookies()).get("session")?.value;
	return (
		<div className="bg-white p-5 rounded-xl w-full h-full shadow-lg flex flex-col gap-3 items-center justify-center">
			<div className="grid grid-cols-3 gap-3">
				{favorite &&
					favorite.content.map((item: Listing) => (
						<div key={item.id} className=" w-full bg-white h-full">
							<div className="flex flex-col gap-3 text-sm">
								<div className="relative">
									<img src="/indir.jpeg" alt="Home Img" className="w-full h-full " />
									<FavoriteButton initialFavoriteState={true} listingId={item.id} token={token} />
								</div>
								<div className="px-2 py-1">
									<div className=" flex flex-col items-center gap-4">
										<div className="flex gap-3 items-center">
											<FaMapMarkerAlt size={22} />
											<div className=" font-semibold">
												{item.address}, {item.city}
											</div>
										</div>
										<div className="flex gap-3 justify-between w-full text-[#818181] font-semibold">
											<div>{item.propertyType}</div>
											<div>{formatDate(item.createdDate)}</div>
										</div>
										<div className="flex justify-between w-full">
											<Link href={`/blog/${item.id}?propertyType=${item.propertyType}`}>
												<button className="bg-black py-2 px-3 text-white rounded-lg font-semibold">Book Now</button>
											</Link>
											<div className="flex items-center font-semibold">
												<FaTurkishLiraSign />
												<div>{item.price}</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
			</div>
			<div className="flex items-center justify-center">
				<PaginationWithLinks page={currentPage} pageSize={3} totalCount={favorite.totalElements} />
			</div>
		</div>
	);
};

export default UserFavoriteListing;
