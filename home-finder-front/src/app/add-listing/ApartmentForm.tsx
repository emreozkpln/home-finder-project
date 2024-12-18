"use client";
import React, { useActionState } from "react";
import { apartmentSaving } from "./actions";
import { useFormStatus } from "react-dom";

const ApartmentForm = () => {
	const [state, apartmentAction] = useActionState(apartmentSaving, undefined);
	return (
		<div>
			<form action={apartmentAction} className="flex flex-col gap-10 items-center justify-center w-full">
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
						<input type="text" value={"Apartment"} readOnly id="propertyType" name="propertyType" className="border rounded-lg px-4 py-2 outline-none focus:border-gray-500" />
						{state?.errors?.propertyType && <p className="text-red-500 font-semibold text-lg">{state.errors.propertyType}</p>}
					</div>

					<div className="flex flex-col gap-1">
						<label htmlFor="areaWithMetres" className="text-sm font-medium text-[#374551]">
							Area With Metres
						</label>
						<input type="number" id="areaWithMetres" name="areaWithMetres" className="border rounded-lg px-4 py-2 outline-none focus:border-gray-500" />
						{state?.errors?.areaWithMetres && <p className="text-red-500 font-semibold text-lg">{state.errors.areaWithMetres}</p>}
					</div>

					<div className="flex flex-col gap-1">
						<label htmlFor="floorNumber" className="text-sm font-medium text-[#374551]">
							Floor Number
						</label>
						<input type="number" id="floorNumber" name="floorNumber" className="border rounded-lg px-4 py-2 outline-none focus:border-gray-500" />
						{state?.errors?.floorNumber && <p className="text-red-500 font-semibold text-lg">{state.errors.floorNumber}</p>}
					</div>

					<div className="flex flex-col gap-1">
						<label htmlFor="totalFloors" className="text-sm font-medium text-[#374551]">
							Total Floors
						</label>
						<input type="number" id="totalFloors" name="totalFloors" className="border rounded-lg px-4 py-2 outline-none focus:border-gray-500" />
						{state?.errors?.totalFloors && <p className="text-red-500 font-semibold text-lg">{state.errors.totalFloors}</p>}
					</div>

					<div className="flex flex-col gap-1">
						<label htmlFor="numberOfRooms" className="text-sm font-medium text-[#374551]">
							Number of Rooms
						</label>
						<input type="number" id="numberOfRooms" name="numberOfRooms" className="border rounded-lg px-4 py-2 outline-none focus:border-gray-500" />
						{state?.errors?.numberOfRooms && <p className="text-red-500 font-semibold text-lg">{state.errors.numberOfRooms}</p>}
					</div>

					<div className="flex flex-col gap-1">
						<label htmlFor="numberOfBathrooms" className="text-sm font-medium text-[#374551]">
							Number of Bathrooms
						</label>
						<input type="number" id="numberOfBathrooms" name="numberOfBathrooms" className="border rounded-lg px-4 py-2 outline-none focus:border-gray-500" />
						{state?.errors?.numberOfBathrooms && <p className="text-red-500 font-semibold text-lg">{state.errors.numberOfBathrooms}</p>}
					</div>

					<div className="flex flex-col gap-1">
						<label htmlFor="heatingType" className="text-sm font-medium text-[#374551]">
							Heating Type
						</label>
						<select id="heatingType" name="heatingType" className="border rounded-lg px-4 py-2 outline-none focus:border-gray-500">
							<option value="">Select Heating Type</option>
							<option value="Central">Central</option>
							<option value="Gas">Gas</option>
							<option value="Electric">Electric</option>
						</select>
						{state?.errors?.heatingType && <p className="text-red-500 font-semibold text-lg">{state.errors.heatingType}</p>}
					</div>

					<div className="flex items-center gap-2">
						<input type="checkbox" id="hasBalcony" name="hasBalcony" className="h-5 w-5 text-blue-500 focus:ring-2 focus:ring-blue-500 border-gray-300 rounded" />
						<label htmlFor="hasBalcony" className="text-sm font-medium text-[#374551]">
							Has Balcony
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

export default ApartmentForm;
