import { getAllPost } from "@/services/listingService";
import React from "react";
import ListingList from "./listing-list";
import { PaginationWithLinks } from "@/components/ui/pagination-with-links";

interface BlogProps {
	searchParams: { [key: string]: string | undefined };
}

const Blog = async ({ searchParams }: BlogProps) => {
	const currentSearchParams = await searchParams;
	const currentPage = parseInt((currentSearchParams?.page as string) || "0");
	const postsPerPage = parseInt((currentSearchParams?.pageSize as string) || "10");
	const data = await getAllPost(currentPage, postsPerPage);

	return (
		<div>
			<ListingList content={data} />
			<div className="flex items-center justify-center pb-5">
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
