import { DetachedHouseListing } from "@/lib/types";
import React from "react";

type DetachedHouseListingComponentProps = {
	data: DetachedHouseListing;
};

const DetachedHouseListingComponent: React.FC<DetachedHouseListingComponentProps> = ({ data }) => {
	return (
		<>
			<li>Garage: {data.hasGarage ? "Yes" : "No"}</li>
			<li>Garden: {data.hasGarden ? "Yes" : "No"}</li>
			<li>Land Size: {data.landSize}</li>
			<li>Number of Baths: {data.numberOfBathrooms}</li>
			<li>Number of Rooms: {data.numberOfRooms}</li>
		</>
	);
};

export default DetachedHouseListingComponent;
