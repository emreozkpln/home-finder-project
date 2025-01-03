import FavoriteButton from "@/components/FavoriteButton";
import { Listing, ListingWithPagination } from "@/lib/types";
import { formatDate, formatDateWithString } from "@/util/formatDate";
import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";
import { FaTurkishLiraSign } from "react-icons/fa6";

type ListingListProps = {
	content: ListingWithPagination;
};

const ListingList: React.FC<ListingListProps> = async ({ content }) => {
	const token = (await cookies()).get("session")?.value;
	return (
		<div className="grid grid-cols-3 gap-10">
			{content &&
				content.content.map((item: Listing) => (
					<div key={item.id} className=" w-full bg-white pb-5">
						<div className="flex flex-col gap-4">
							<div className="relative">
								<img src="/indir.jpeg" alt="Home Img" className="w-full h-full " />
								<FavoriteButton initialFavoriteState={false} listingId={item.id} token={token} />
							</div>
							<div className=" px-7 flex flex-col gap-1.5">
								<div className="text-[#2C7272] flex items-center justify-between">
									<div>
										<div className="flex items-center gap-1 font-bold text-lg">
											<FaTurkishLiraSign />
											{item.price}
										</div>
										<div className="h-px w-[88px] border border-[#2C7272]"></div>
									</div>
									<div className="font-bold text-sm">{Array.isArray(item.createdDate) ? formatDate(item.createdDate) : formatDateWithString(item.createdDate)}</div>
								</div>
								<div className="font-light text-xs text-[#A9A9A9] mt-1">
									{item.address}, {item.city}, {item.district}
								</div>
								<div className="text-lg text-[#1B1B1B] font-black">
									{item.district}, {item.city}
								</div>
								<div className="flex items-center justify-between text-[#7F7F7F] font-bold text-sm">
									<div className="">{item.user}</div>
									<div>{item.propertyType}</div>
								</div>
								<div className="flex items-center justify-between">
									<div></div>
									<Link href={`/blog/${item.id}?propertyType=${item.propertyType}`}>
										<button className="bg-[#005555] text-[#E7E4DE] py-2 px-3 rounded-full w-36">See Details</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				))}
		</div>
	);
};

export default ListingList;
