"use client";
import React from "react";
import { logout } from "@/app/login/actions";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { FaRegUserCircle } from "react-icons/fa";

const HeadDropdownMenu = ({ username }: any) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<FaRegUserCircle size={25} />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>{username}</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>View Profile</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => {
						logout();
					}}
				>
					Log out
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default HeadDropdownMenu;
