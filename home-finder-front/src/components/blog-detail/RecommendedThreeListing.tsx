import { formatDate } from "@/util/formatDate";
import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaTurkishLiraSign } from "react-icons/fa6";

const RecommendedThreeListing = ({ threeListing }: any) => {
	return (
		<div>
			<div className="text-[#444444] font-bold">Recommended Listing</div>
			<div className="grid grid-cols-3 gap-6">
				{threeListing &&
					threeListing.map((item: any) => (
						<div key={item.id} className=" w-full bg-white">
							<div className="flex flex-col gap-3 text-sm">
								<img src="/indir.jpeg" alt="Home Img" className="w-full h-full" />
								<div className="px-7 py-1">
									<div className=" flex flex-col items-start gap-4">
										<div className="flex gap-3 items-center">
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
		</div>
	);
};

export default RecommendedThreeListing;
