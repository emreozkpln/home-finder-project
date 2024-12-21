"use client";
import { addFavorites, removeFavorites } from "@/services/userService";
import { useRouter } from "next/navigation";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { toast } from "sonner";

interface FavoriteButtonProps {
	initialFavoriteState?: boolean;
	listingId: number;
	token?: string | undefined;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ initialFavoriteState, listingId, token }) => {
	const router = useRouter();

	const handleRemove = async () => {
		const data = await removeFavorites(token, listingId);
		if (data.status == "OK") {
			router.refresh();
			toast(data.status, {
				description: data.message,
				action: {
					label: "Undo",
					onClick: () => console.log("Undo"),
				},
			});
		}
	};

	const handleAdd = async () => {
		if (token == null || token == undefined) {
			router.push("/login");
			return;
		}
		const data = await addFavorites(token, listingId);
		if (data?.message) {
			toast(data.status, {
				description: data.message,
				action: {
					label: "Undo",
					onClick: () => console.log("Undo"),
				},
			});
		}
	};
	if (initialFavoriteState == true) {
		return (
			<div className="absolute top-1 right-1">
				<button
					onClick={() => {
						handleRemove();
					}}
				>
					<FaHeart className="text-[#ee555f]" size={30} />
				</button>
			</div>
		);
	} else {
		return (
			<div className="absolute top-1 right-1">
				<button
					onClick={() => {
						handleAdd();
					}}
				>
					<FaHeart className="text-white" size={30} />
				</button>
			</div>
		);
	}
};

export default FavoriteButton;
