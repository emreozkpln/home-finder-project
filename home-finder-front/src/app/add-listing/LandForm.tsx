"use client";
import React, { useActionState } from "react";
import { landSaving } from "./actions";
import { useFormStatus } from "react-dom";

const LandForm = () => {
	const [state, landAction] = useActionState(landSaving, undefined);
	return (
		<div>
			<form action={landAction} className="flex flex-col gap-10 items-center justify-center w-full">
				<div className="grid grid-cols-2 gap-5">
					<div className="flex flex-col gap-2">
						<div className="flex flex-col gap-1">
							<label htmlFor="listingTitle" className="text-sm font-medium text-[#374551]">
								Listing Title
							</label>
							<input type="text" id="listingTitle" name="listingTitle" className="border rounded-lg px-4 py-2 outline-none focus:border-gray-500" />
						</div>
						{state?.errors?.listingTitle && <p className="text-red-500 font-semibold text-lg">{state.errors.listingTitle}</p>}
					</div>

					<div className="flex flex-col gap-1">
						<label htmlFor="status" className="text-sm font-medium text-[#374551]">
							Status
						</label>
						<select id="status" name="status" className="border rounded-lg px-4 py-2 outline-none focus:border-gray-500">
							<option value="">Select Status</option>
							<option value="Rent">Rent</option>
							<option value="Sale">Sale</option>
						</select>
						{state?.errors?.status && <p className="text-red-500 font-semibold text-lg">{state.errors.status}</p>}
					</div>
					<div className="flex flex-col gap-2">
						<div className="flex flex-col gap-1">
							<label htmlFor="address" className="text-sm font-medium text-[#374551]">
								Address
							</label>
							<input type="text" id="address" name="address" className="border rounded-lg px-4 py-2 outline-none focus:border-gray-500" />
						</div>
						{state?.errors?.address && <p className="text-red-500 font-semibold text-lg">{state.errors.address}</p>}
					</div>
					<div className="flex flex-col gap-1">
						<label htmlFor="city" className="text-sm font-medium text-[#374551]">
							City
						</label>
						<input type="text" id="city" name="city" className="border rounded-lg px-4 py-2 outline-none focus:border-gray-500" />
						{state?.errors?.city && <p className="text-red-500 font-semibold text-lg">{state.errors.city}</p>}
					</div>

					<div className="flex flex-col gap-1">
						<label htmlFor="district" className="text-sm font-medium text-[#374551]">
							District
						</label>
						<input type="text" id="district" name="district" className="border rounded-lg px-4 py-2 outline-none focus:border-gray-500" />
						{state?.errors?.district && <p className="text-red-500 font-semibold text-lg">{state.errors.district}</p>}
					</div>

					<div className="flex flex-col gap-1">
						<label htmlFor="price" className="text-sm font-medium text-[#374551]">
							Price
						</label>
						<input type="number" id="price" name="price" className="border rounded-lg px-4 py-2 outline-none focus:border-gray-500" />
						{state?.errors?.price && <p className="text-red-500 font-semibold text-lg">{state.errors.price}</p>}
					</div>

					<div className="flex flex-col gap-1">
						<label htmlFor="description" className="text-sm font-medium text-[#374551]">
							Description
						</label>
						<textarea id="description" name="description" className="border rounded-lg px-4 py-2 outline-none focus:border-gray-500" />
						{state?.errors?.description && <p className="text-red-500 font-semibold text-lg">{state.errors.description}</p>}
					</div>

					<div className="flex flex-col gap-1">
						<label htmlFor="propertyType" className="text-sm font-medium text-[#374551]">
							Property Type
						</label>
						<input type="text" value={"Land"} readOnly id="propertyType" name="propertyType" className="border rounded-lg px-4 py-2 outline-none focus:border-gray-500" />
						{state?.errors?.propertyType && <p className="text-red-500 font-semibold text-lg">{state.errors.propertyType}</p>}
					</div>

					<div className="flex flex-col gap-1">
						<label htmlFor="landSize" className="text-sm font-medium text-[#374551]">
							Land Size
						</label>
						<input type="number" id="landSize" name="landSize" className="border rounded-lg px-4 py-2 outline-none focus:border-gray-500" />
						{state?.errors?.landSize && <p className="text-red-500 font-semibold text-lg">{state.errors.landSize}</p>}
					</div>

					<div className="flex flex-col gap-1">
						<label htmlFor="zoningStatus" className="text-sm font-medium text-[#374551]">
							Zoning Status
						</label>
						<select id="zoningStatus" name="zoningStatus" className="border rounded-lg px-4 py-2 outline-none focus:border-gray-500">
							<option value="">Select Zoning Status</option>
							<option value="Residential">Residential</option>
							<option value="Commercial">Commercial</option>
							<option value="Industrial">Industrial</option>
							<option value="Agricultural">Agricultural</option>
						</select>
						{state?.errors?.zoningStatus && <p className="text-red-500 font-semibold text-lg">{state.errors.zoningStatus}</p>}
					</div>

					<div className="flex flex-col gap-1">
						<label htmlFor="deedStatus" className="text-sm font-medium text-[#374551]">
							Deed Status
						</label>
						<select id="deedStatus" name="deedStatus" className="border rounded-lg px-4 py-2 outline-none focus:border-gray-500">
							<option value="">Select Zoning Status</option>
							<option value="Full Ownership">Full Ownership</option>
							<option value="Shared Ownership">Shared Ownership</option>
							<option value="Mortgage">Mortgage</option>
							<option value="Restricted">Restricted</option>
						</select>
						{state?.errors?.deedStatus && <p className="text-red-500 font-semibold text-lg">{state.errors.deedStatus}</p>}
					</div>

					<div className="flex items-center gap-2">
						<input type="checkbox" id="isSuitableForConstruction" name="isSuitableForConstruction" className="h-5 w-5 text-blue-500 focus:ring-2 focus:ring-blue-500 border-gray-300 rounded" />
						<label htmlFor="isSuitableForConstruction" className="text-sm font-medium text-[#374551]">
							Is Suitable For Construction
						</label>
					</div>
				</div>
				<div className="h-px border border-[#F3F4F7] w-full"></div>
				<SubmitButton />
			</form>
		</div>
	);
};

function SubmitButton() {
	const { pending } = useFormStatus();
	return (
		<button disabled={pending} type="submit" className="border-[#0799C9] border-2 text-[#0799C9] rounded-full py-4 px-16 text-lg font-medium">
			CONTINUE
		</button>
	);
}

export default LandForm;
