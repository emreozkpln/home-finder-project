import { formatDate } from "@/util/formatDate";
import Link from "next/link";
import React from "react";
import { FaTurkishLiraSign } from "react-icons/fa6";

const ListingList = ({ content }: any) => {
	return (
		<div className="grid grid-cols-3 gap-10 py-16 px-52">
			{content &&
				content.content.map((item: any) => (
					<div key={item.id} className=" w-full bg-white pb-5">
						<div className="flex flex-col gap-4">
							<img src="/indir.jpeg" alt="Home Img" className="w-full max-h-80" />
							<div className=" px-7 flex flex-col gap-1.5">
								<div className="text-[#2C7272] flex items-center justify-between">
									<div>
										<div className="flex items-center gap-1 font-bold text-lg">
											<FaTurkishLiraSign />
											{item.price}
										</div>
										<div className="h-px w-[88px] border border-[#2C7272]"></div>
									</div>
									<div className="font-bold text-sm">{formatDate(item.createdDate)}</div>
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
