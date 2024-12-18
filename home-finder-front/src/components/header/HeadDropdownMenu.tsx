"use client";
import React from "react";
import { logout } from "@/app/login/actions";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";

type HeadDropdownMenuProps = {
	username: string | undefined;
};
const HeadDropdownMenu: React.FC<HeadDropdownMenuProps> = ({ username }) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<FaRegUserCircle size={25} />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>{username}</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<Link href="/profile?page=0">
					<DropdownMenuItem>View Profile</DropdownMenuItem>
				</Link>
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
