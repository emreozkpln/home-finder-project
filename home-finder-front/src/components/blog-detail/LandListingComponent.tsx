import { LandListing } from "@/lib/types";
import React from "react";

type LandListingComponentProps = {
	data: LandListing;
};
const LandListingComponent: React.FC<LandListingComponentProps> = ({ data }) => {
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
