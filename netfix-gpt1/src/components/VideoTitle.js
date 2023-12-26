import React from "react";

const VideoTitle = ({ title, overview }) => {
	return (
		<div className="relative text-white bg-gradient-to-r from-black aspect-video md:pt-52 pt-[30%] pl-6 md:pl-20 ">
			<h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
			<p className="hidden md:inline-block text-md  my-5">{overview}</p>
			<div className="text-md md:text-xl mt-2">
				<button className="p-2 px-3 md:p-3 md:px-7 bg-white text-black hover:bg-opacity-80 rounded-md">
					▶️ Play
				</button>
				<button className="p-2 px-3 md:p-3 md:px-7 mx-2 rounded-md bg-gray-300 bg-opacity-70 hover:bg-opacity-50 text-white">
					More Info
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;
