import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
	return (
		// <div className="text-white">naknsf</div>
		<div className="pl-2 md:pl-14 md:pt-4">
			<h1 className="md:text-2xl text-xl pl-4 py-3 text-white">{title}</h1>
			<div className="flex overflow-x-scroll no-scrollbar ">
				<div className="flex">
					{movies.map((movie) => (
						<MovieCard key={movie.id} poster={movie.poster_path} />
					))}
				</div>
			</div>
		</div>
	);
};

export default MovieList;
