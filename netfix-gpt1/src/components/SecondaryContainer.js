import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
	const nowPlayingMovies = useSelector(
		(store) => store.movies.nowPlayingMovies
	);

	const popularMovies = useSelector((store) => store.movies.popularMovies);

	const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

	const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

	if (!nowPlayingMovies || !popularMovies || !upcomingMovies || !topRatedMovies)
		return;

	return (
		<div className="bg-black">
			<div className="relative -my-44">
				<MovieList title="Now Playing" movies={nowPlayingMovies} />
				<MovieList title="Top Rated Movies" movies={topRatedMovies} />
				<MovieList title="Upcoming movies" movies={upcomingMovies} />
				<MovieList title="Popular Movies" movies={popularMovies} />
			</div>
		</div>
	);
};

export default SecondaryContainer;
