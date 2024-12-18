import React from "react";
import ApartmentForm from "./ApartmentForm";
import DetachedHouseForm from "./DetachedHouseForm";
import LandForm from "./LandForm";
import FormNavbar from "./FormNavbar";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

type AddListingPageProps = {
	searchParams: { [key: string]: string | undefined };
};

const AddListingPage: React.FC<AddListingPageProps> = async ({ searchParams }) => {
	const currentSearchParams = await searchParams;
	const type = currentSearchParams.type || "apartment";

	const renderForm = () => {
		switch (type) {
			case "apartment":
				return <ApartmentForm />;
			case "detachedHouse":
				return <DetachedHouseForm />;
			case "land":
				return <LandForm />;
			default:
				return <ApartmentForm />;
		}
	};
	return (
		<div className="max-w-[1000px] mx-auto mt-3 flex flex-col gap-4 ">
			<FormNavbar type={type} />
			<div>{renderForm()}</div>
			<div className="flex flex-col items-center justify-center mb-3 gap-4">
				<div className="text-[#A3A9AF] font-medium">Maybe you want to go back?</div>
				<Link href="/blog">
					<button className="flex gap-3 items-center justify-center text-[#E7E9EA] bg-[#717B84] rounded-full py-3 px-7">
						<FaArrowLeft />
						Listing List
					</button>
				</Link>
			</div>
		</div>
	);
};

export default AddListingPage;
