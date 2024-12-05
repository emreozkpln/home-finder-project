import BlogInformation from "@/components/blog-detail/BlogInformation";
import ImageForBlogDetail from "@/components/blog-detail/ImageForBlogDetail";
import RecommendedThreeListing from "@/components/blog-detail/RecommendedThreeListing";
import UserDescription from "@/components/blog-detail/UserDescription";
import { getPostById, getThreePostByPropertyType } from "@/services/listingService";
import React from "react";

interface BlogDetailPage {
	params: {
		id: string;
	};
	searchParams: { [key: string]: string | undefined };
}

const BlogDetailPage = async ({ params, searchParams }: BlogDetailPage) => {
	const currentSearchParams = await searchParams;
	const currentParams = await params;
	const [data, threePost] = await Promise.all([getPostById(currentParams?.id), getThreePostByPropertyType(currentSearchParams?.propertyType)]);

	return (
		<div className="bg-[#F7F7FB] h-full min-h-screen">
			<div className="grid grid-cols-[55%_45%] gap-8 p-8 px-10">
				<div className="flex flex-col gap-5">
					<ImageForBlogDetail />
					<UserDescription user={data.user} userEmail={data.userEmail} propertyType={data.propertyType} />
				</div>
				<div className="flex flex-col gap-6 bg-white rounded-xl p-5 shadow-xl">
					<BlogInformation data={data} />
					<RecommendedThreeListing threeListing={threePost} />
				</div>
			</div>
		</div>
	);
};

export default BlogDetailPage;
