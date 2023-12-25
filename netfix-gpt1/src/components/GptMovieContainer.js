import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieContainer = () => {
	let { movies, gptMovies } = useSelector((store) => store.gpt);
	if (!movies) return null;

	gptMovies = gptMovies.split(", ");

	return (
		<div className="bg-black m-4 p-4">
			{gptMovies.map((movie, index) => (
				<MovieList key={movie} title={movie} movies={movies[index]} />
			))}
		</div>
	);
};

export default GptMovieContainer;
