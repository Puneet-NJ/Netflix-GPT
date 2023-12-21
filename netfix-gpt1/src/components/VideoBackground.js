import React from "react";
import { useSelector } from "react-redux";
import useDispatchTrailer from "../hooks/useDispatchTrailer";

const VideoBackground = ({ movieId }) => {
	const trailer = useSelector((store) => store.movies?.trailer);
	// console.log("outside useDispatchTrailer1");
	useDispatchTrailer(movieId);
	// console.log("outside useDispatchTrailer2");

	console.log("https://www.youtube.com/embed/" + trailer?.key);

	return (
		<div className=" absolute w-screen aspect-video">
			<iframe
				width="100%"
				height="100%"
				src={
					"https://www.youtube.com/embed/" + trailer?.key + "?autoplay=1&mute=1"
				}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			></iframe>
		</div>
	);
};

export default VideoBackground;
