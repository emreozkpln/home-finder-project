import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CgArrowLongRight } from "react-icons/cg";
import { ImQuotesLeft } from "react-icons/im";
import { FaTurkishLiraSign } from "react-icons/fa6";
import getThreeListing from "@/services/listingService";
import { formatDate } from "@/util/formatDate";

const PopularListing = async () => {
	const data = await getThreeListing();

	return (
		<div className="mt-20" style={{ background: "linear-gradient(to bottom, white 30%, black 30%)" }}>
			<div className="px-32 grid gap-5">
				<div className="flex gap-7 items-center">
					<div className="h-px w-12 border-2 border-black rounded-lg"></div>
					<div className="font-normal text-2xl">POPULAR</div>
				</div>
				<div className="flex justify-between items-center">
					<div className="text-[#2B2B2B] font-extrabold text-4xl">Our Popular Homes</div>
					<div className="flex gap-2 items-center font-medium">
						<div>Explore All</div>
						<CgArrowLongRight />
					</div>
				</div>
				<div className="grid grid-cols-3 gap-6">
					{data &&
						data.map((item: any) => (
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
												<button className="bg-black py-2 px-6 text-white rounded-lg font-semibold">Book Now</button>
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
				<div className="flex items-center justify-between pb-6">
					<div>
						<div className="text-white font-medium text-lg">Emre Özkaplan</div>
						<div className="text-[#6C6C6C] text-sm">Founder, La Maison</div>
					</div>
					<div className="text-[#797979] w-1/2 leading-5 flex items-center gap-4">
						<ImQuotesLeft size={70} />
						<div className="font-semibold text-lg">Our business is built off of close relationships and we are glad that we are able to share our positive real estate experiences with ur clients.</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PopularListing;
