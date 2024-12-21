import React from "react";

interface ImageForBlogDetailProps {
	images: string[];
}

const ImageForBlogDetail: React.FC<ImageForBlogDetailProps> = ({ images }) => {
	const fotoUrlList = images;
	const staticFotoUrl = "/indir.jpeg";
	while (fotoUrlList.length < 5) {
		fotoUrlList.push(staticFotoUrl);
	}

	return (
		<div>
			<div className="flex flex-col gap-5 ">
				<img src={fotoUrlList[0]} alt="Home Image" className="max-h-80 w-full rounded-xl" />
				<div className="grid grid-cols-4 gap-6">
					{fotoUrlList.slice(1, 5).map((url, index) => (
						<img key={index} src={url} alt={`Home Image ${index + 1}`} className="w-full rounded-xl h-[106px]" />
					))}
				</div>
			</div>
		</div>
	);
};

export default ImageForBlogDetail;
