import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import { useSelector } from "react-redux";
import GPT_CONTAINER from "./GPT_CONTAINER";

const Browse = () => {
	const showGPT = useSelector((store) => store.gpt.GPTContainer);

	useNowPlayingMovies();
	usePopularMovies();
	useUpcomingMovies();
	useTopRatedMovies();

	return (
		<div>
			<Header />
			{showGPT ? (
				<GPT_CONTAINER />
			) : (
				<>
					<MainContainer />
					<SecondaryContainer />
				</>
			)}
		</div>
	);
};

export default Browse;
