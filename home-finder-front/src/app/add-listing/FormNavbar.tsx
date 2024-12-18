import Link from "next/link";
import React from "react";

type FormNavbarProps = {
	type: string;
};

const FormNavbar: React.FC<FormNavbarProps> = ({ type }) => {
	const steps = [
		{ type: "apartment", label: "Apartment", url: "/add-listing?type=apartment" },
		{ type: "detachedHouse", label: "Detached House", url: "/add-listing?type=detachedHouse" },
		{ type: "land", label: "Land", url: "/add-listing?type=land" },
	];
	return (
		<div className="flex justify-center items-center bg-[#F3F4F7] py-4">
			<div className="flex space-x-8">
				{steps.map((step) => (
					<Link href={step.url} key={step.type} className="flex items-center space-x-2">
						<div className={`w-10 h-10 flex justify-center items-center rounded-full border-2 ${type === step.type ? "bg-blue-500 text-white border-blue-500" : "bg-white text-blue-500 border-blue-500"}`}>{step.label.charAt(0)}</div>
						<span className={`${type === step.type ? "text-blue-500 font-semibold" : "text-gray-700"}`}>{step.label}</span>
					</Link>
				))}
			</div>
		</div>
	);
};

export default FormNavbar;
