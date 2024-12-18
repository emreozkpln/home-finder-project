"use client";
import { deleteListing } from "@/services/listingService";
import { useRouter } from "next/navigation";
import React from "react";

type DeleteButtonProps = {
	id: number;
	token: string | undefined;
};

const DeleteButton: React.FC<DeleteButtonProps> = ({ id, token }) => {
	const router = useRouter();
	const handleDelete = async () => {
		const data = await deleteListing(id, token);
		if (data.status == "OK") {
			router.refresh();
		}
	};
	return (
		<button
			className="bg-red-400 text-white px-4 py-1 rounded-lg text-sm"
			onClick={() => {
				handleDelete();
			}}
		>
			Delete
		</button>
	);
};

export default DeleteButton;
