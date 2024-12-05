import React from "react";

const DetachedHouseListingComponent = ({ data }: any) => {
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
