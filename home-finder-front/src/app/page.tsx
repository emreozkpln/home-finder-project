import Header from "@/components/Header";
import HomePageBody from "@/components/HomePageBody";
import PopularListing from "@/components/PopularListing";
import SearchBar from "@/components/SearchBar";

export default function Home() {
	return (
		<div>
			<Header />
			<HomePageBody />
			<SearchBar />
			<PopularListing />
		</div>
	);
}
