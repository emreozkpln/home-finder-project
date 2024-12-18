import React from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";

const SortMenu = () => {
	return (
		<div>
			<Dialog>
				<DialogTrigger className="bg-[#2C7272] py-2 px-5 text-sm text-white rounded-xl shadow-xl">Sort</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Sorting</DialogTitle>
						<DialogDescription>From here you can sort as you wish.</DialogDescription>
					</DialogHeader>
					<div className="flex flex-col gap-4 items-center justify-center">
						<DialogClose asChild>
							<Link href="/blog?sortField=price&sortDirection=desc" className="flex justify-center bg-[#121214] text-white py-2 px-6 rounded-lg text-sm">
								By Price (Highest first)
							</Link>
						</DialogClose>
						<DialogClose asChild>
							<Link href="/blog?sortField=price&sortDirection=asc" className="flex justify-center bg-[#121214] text-white py-2 px-6 rounded-lg text-sm">
								By Price (Lowest first)
							</Link>
						</DialogClose>
						<DialogClose asChild>
							<Link href="/blog?sortField=createdDate&sortDirection=desc" className="flex justify-center bg-[#121214] text-white py-2 px-6 rounded-lg text-sm">
								By Created Date (Newest listing first)
							</Link>
						</DialogClose>
						<DialogClose asChild>
							<Link href="/blog?sortField=createdDate&sortDirection=asc" className="flex justify-center bg-[#121214] text-white py-2 px-6 rounded-lg text-sm">
								By Created Date (Oldest ad first)
							</Link>
						</DialogClose>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default SortMenu;
