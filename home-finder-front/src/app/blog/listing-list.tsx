import SidebarComponent from "@/components/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { listing } from "@/lib/types";
import { formatDate } from "@/util/formatDate";
import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaTurkishLiraSign } from "react-icons/fa6";

// interface ListingListProps{
//     content: listing[],
//     first: boolean,
//     last: boolean,
//     number: number,
//     size: number,
//     totalElements: number,
//     totalPages:number
// }
const ListingList = ({ content }: any) => {
	console.log(content);

	return (
		<div className="grid grid-cols-4 gap-6 p-8">
			{content &&
				content.content.map((item: any) => (
					<div key={item.id} className=" w-full bg-white pb-5">
						<div className="flex flex-col gap-3">
							<img src="/indir.jpeg" alt="Home Img" className="w-full max-h-96" />
							<div className="px-7 py-1">
								<div className=" flex flex-col items-start gap-4">
									<div className="flex gap-3">
										<FaMapMarkerAlt size={22} />
										<div className=" font-semibold">
											{item.address}, {item.city}
										</div>
									</div>
									<div className="flex gap-3 justify-between w-full text-[#818181] font-semibold">
										<div>{item.user}</div>
										<div>{formatDate(item.createdDate)}</div>
									</div>
									<div className="flex justify-between w-full">
										<Link href={`/blog/${item.id}?propertyType=${item.propertyType}`}>
											<button className="bg-black py-2 px-6 text-white rounded-lg font-semibold">Book Now</button>
										</Link>
										<div className="flex items-center font-semibold text-lg">
											<FaTurkishLiraSign />
											<div>{item.price}</div>
										</div>
									</div>
								</div>
								<div className="flex items-center justify-center pt-2">
									<div className="font-bold">{item.propertyType}</div>
								</div>
							</div>
						</div>
					</div>
				))}
		</div>
	);
};

export default ListingList;
