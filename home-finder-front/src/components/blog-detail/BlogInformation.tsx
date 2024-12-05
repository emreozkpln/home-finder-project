import React from "react";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { TbMeterSquare } from "react-icons/tb";
import { formatDate } from "@/util/formatDate";
import { ApartmentListing, DetachedHouseListing, LandListing } from "@/lib/types";
import ApartmentListingComponent from "./ApartmentListingComponent";
import DetachedHouseListingComponent from "./DetachedHouseListingComponent";
import LandListingComponent from "./LandListingComponent";

type ListingAdditionalDetail = {
	propertyType: "Apartment" | "DetachedHouse" | "Land";
	additionalDetail: ApartmentListing | DetachedHouseListing | LandListing;
};

const BlogInformation = ({ data }: any) => {
	return (
		<div>
			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-1">
					<div className="flex justify-between font-extrabold">
						<div className="text-xl">Modern Dimond House</div>
						<div className="text-[#415FFB]">${data.price}</div>
					</div>
					<div className="text-sm font-medium text-[#BBC0C5] flex items-center justify-between">
						<div>
							{data.address}, {data.city}, {data.district}
						</div>
						<div>{formatDate(data.createdDate)}</div>
					</div>
				</div>
				<div className="flex items-center gap-10">
					<div className="flex items-center gap-2">
						<MdOutlineMeetingRoom size={22} className="text-[#393939]" />
						<div className="text-sm font-semibold text-[#7A7A7A]">{data.additionalDetail.numberOfRooms}</div>
					</div>
					<div className="flex items-center gap-2">
						<FaBath size={20} className="text-[#393939]" />
						<div className="text-sm font-semibold text-[#7A7A7A]">{data.additionalDetail.numberOfBathrooms} bath</div>
					</div>
					<div className="flex items-center gap-1">
						<div className="text-sm font-semibold text-[#7A7A7A]">{data.additionalDetail.landSize}</div>
						<TbMeterSquare size={22} className="text-[#393939]" />
					</div>
				</div>
				<div className="flex flex-col gap-1">
					<div className="text-[#444444] font-bold">Description</div>
					<div className="text-[#999999] font-bold text-sm">{data.description}</div>
				</div>
				<div className="flex flex-col gap-1">
					<div className="text-[#444444] font-bold">Key Features</div>
					<div className="grid grid-cols-2 gap-1 list-disc px-1 text-[#999999] font-bold text-sm">
						{data?.propertyType === "Apartment" && (
							<>
								<ApartmentListingComponent data={data.additionalDetail} />
							</>
						)}
						{data?.propertyType === "DetachedHouse" && (
							<>
								<DetachedHouseListingComponent data={data.additionalDetail} />
							</>
						)}
						{data?.propertyType === "Land" && (
							<>
								<LandListingComponent data={data.additionalDetail} />
							</>
						)}
						{!data.propertyType && <li>No additional details available</li>}
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogInformation;
