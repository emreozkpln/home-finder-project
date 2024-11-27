import Image from "next/image";
import React from "react";
import { FiPlus } from "react-icons/fi";
import HomeImg from "/home.png";

const HomePageBody = () => {
	return (
		<div className="bg-[#E2F4FE] grid grid-cols-[40%_60%] pl-32 pb-7 pt-5">
			<div className="flex flex-col gap-6">
				<div className="font-semibold text-6xl flex flex-col gap-1">
					<div>Find A House</div>
					<div>That Suits You</div>
				</div>
				<div className="text-[#87898E]">
					Want to find a home? We are ready to help you find <br /> one that suits your lifestyle and needs
				</div>
				<button className="px-5 py-3 text-white bg-black w-40 text-sm rounded-lg font-medium">Get Started</button>
				<div className="flex gap-9">
					<div className="flex flex-col gap-1">
						<div className="flex items-center gap-0.5 text-xl">
							<div className="font-semibold">1200</div>
							<FiPlus className="text-[#0303EB]" />
						</div>
						<div className="text-xs">Listed Properties</div>
					</div>
					<div className="flex flex-col gap-1">
						<div className="flex items-center gap-0.5 text-xl">
							<div className="font-semibold">4500</div>
							<FiPlus className="text-[#0303EB]" />
						</div>
						<div className="text-xs">Happy Customers</div>
					</div>
					<div className="flex flex-col gap-1">
						<div className="flex items-center gap-0.5 text-xl">
							<div className="font-semibold">1200</div>
							<FiPlus className="text-[#0303EB]" />
						</div>
						<div className="text-xs">Awards</div>
					</div>
				</div>
			</div>
			<div>
				<img src="/home.png" alt="Home Img" className="w-full max-h-96" />
			</div>
		</div>
	);
};

export default HomePageBody;
