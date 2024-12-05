import HomePageBody from "@/components/HomePageBody";
import PopularListing from "@/components/PopularListing";
import SearchBar from "@/components/SearchBar";

export default function Home() {
	return (
		<div>
			<HomePageBody />
			<SearchBar />
			<PopularListing />
		</div>
	);
}
