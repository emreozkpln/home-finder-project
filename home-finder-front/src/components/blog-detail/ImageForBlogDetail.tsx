import React from "react";

const ImageForBlogDetail = () => {
	return (
		<div>
			<div className="flex flex-col gap-5 ">
				<img src="/indir.jpeg" alt="Home Image" className="max-h-80 w-full rounded-xl" />
				<div className="grid grid-cols-4 gap-6">
					<img src="/indir.jpeg" alt="Home Image" className="w-full rounded-xl" />
					<img src="/indir.jpeg" alt="Home Image" className="w-full rounded-xl" />
					<img src="/indir.jpeg" alt="Home Image" className="w-full rounded-xl" />
					<img src="/indir.jpeg" alt="Home Image" className="w-full rounded-xl" />
				</div>
			</div>
		</div>
	);
};

export default ImageForBlogDetail;
