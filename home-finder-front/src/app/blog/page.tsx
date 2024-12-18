import { getAllPostByCreatedDate, getAllPostByPrice } from "@/services/listingService";
import React from "react";
import ListingList from "./listing-list";
import { PaginationWithLinks } from "@/components/ui/pagination-with-links";
import SortMenu from "./SortMenu";

interface BlogProps {
	searchParams: { [key: string]: string | undefined };
}

const Blog = async ({ searchParams }: BlogProps) => {
	const currentSearchParams = await searchParams;
	const currentPage = parseInt((currentSearchParams?.page as string) || "0");
	const postsPerPage = parseInt((currentSearchParams?.pageSize as string) || "10");
	const sortField = currentSearchParams?.sortField;
	const sortDirection = currentSearchParams?.sortDirection || "desc";
	let data;
	switch (sortField) {
		case "createdDate":
			data = await getAllPostByCreatedDate(currentPage, postsPerPage, sortDirection);
			break;
		case "price":
			data = await getAllPostByPrice(currentPage, postsPerPage, sortDirection);
			break;
		default:
			data = await getAllPostByCreatedDate(currentPage, postsPerPage, sortDirection);
			break;
	}

	return (
		<div className="py-10 max-w-7xl mx-auto">
			<div className="flex justify-end pb-5">
				<SortMenu />
			</div>
			<ListingList content={data} />
			<div className="flex items-center justify-center mt-4">
				<PaginationWithLinks
					page={currentPage}
					pageSize={postsPerPage}
					totalCount={data.totalElements}
					pageSizeSelectOptions={{
						pageSizeOptions: [5, 10, 25],
					}}
				/>
			</div>
		</div>
	);
};

export default Blog;
