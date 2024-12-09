import { ApartmentListing } from "@/lib/types";
import React from "react";

type ApartmentListingComponentProps = {
	data: ApartmentListing;
};
const ApartmentListingComponent: React.FC<ApartmentListingComponentProps> = ({ data }) => {
	return (
		<>
			<li>Floor Number: {data.floorNumber}</li>
			<li>Balcony: {data.hasBalcony ? "Yes" : "No"}</li>
			<li>Heating Type: {data.heatingType}</li>
			<li>Number of Baths: {data.numberOfBathrooms}</li>
			<li>Number of Rooms: {data.numberOfRooms}</li>
			<li>Total Floors: {data.totalFloors}</li>
		</>
	);
};

export default ApartmentListingComponent;
