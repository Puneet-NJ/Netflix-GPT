import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
	const movies = useSelector((store) => store.movies?.nowPlayingMovies);

	if (!movies) return;

	const mainMovie = movies[1];
	const { title, overview } = mainMovie;
	return (
		<div className="">
			<VideoBackground movieId={mainMovie.id} />
			<VideoTitle title={title} overview={overview} />
		</div>
	);
};

export default MainContainer;
