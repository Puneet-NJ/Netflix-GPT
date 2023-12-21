import React from "react";

const VideoTitle = ({ title, overview }) => {
	return (
		<div className="relative text-white bg-gradient-to-r from-black w-screen aspect-video pt-52 px-20 ">
			<h1 className="text-6xl font-bold">{title}</h1>
			<p className="text-lg w-[500px] my-5">{overview}</p>
			<div className="text-xl">
				<button className="p-3 px-7 bg-white text-black hover:bg-opacity-80 rounded-md">
					▶️ Play
				</button>
				<button className="mx-2 p-3 rounded-md px-7 bg-gray-300 bg-opacity-70 hover:bg-opacity-50 text-white">
					More Info
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;
