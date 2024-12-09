import React from "react";
import { formatDate } from "@/util/formatDate";
import ApartmentListingComponent from "./ApartmentListingComponent";
import DetachedHouseListingComponent from "./DetachedHouseListingComponent";
import LandListingComponent from "./LandListingComponent";
import { ApartmentListing, DetachedHouseListing, LandListing, ListingWithDetail } from "@/lib/types";

type BlogInformationProps = {
	data: ListingWithDetail;
};

const BlogInformation: React.FC<BlogInformationProps> = ({ data }) => {
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
				<div className="flex flex-col gap-1">
					<div className="text-[#444444] font-bold">Description</div>
					<div className="text-[#999999] font-bold text-sm">{data.description}</div>
				</div>
				<div className="flex flex-col gap-1">
					<div className="text-[#444444] font-bold">Key Features</div>
					<div className="grid grid-cols-2 gap-1 list-disc px-1 text-[#999999] font-bold text-sm">
						{data?.propertyType === "Apartment" && (
							<>
								<ApartmentListingComponent data={data.additionalDetail as ApartmentListing} />
							</>
						)}
						{data?.propertyType === "DetachedHouse" && (
							<>
								<DetachedHouseListingComponent data={data.additionalDetail as DetachedHouseListing} />
							</>
						)}
						{data?.propertyType === "Land" && (
							<>
								<LandListingComponent data={data.additionalDetail as LandListing} />
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
