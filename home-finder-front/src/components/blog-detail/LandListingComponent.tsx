import React from "react";

const LandListingComponent = ({ data }: any) => {
	return (
		<>
			<li>Deed Status: {data.deedStatus}</li>
			<li>Suitable For Construction: {data.isSuitableForConstruction ? "Yes" : "No"}</li>
			<li>Land Size: {data.landSize}</li>
			<li>Zoning Status: {data.zoningStatus}</li>
		</>
	);
};

export default LandListingComponent;
