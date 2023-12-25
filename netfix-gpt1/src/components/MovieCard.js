import React from "react";
import { POSTER_CDN } from "../utils/mockData";

const MovieCard = ({ poster }) => {
	if (!poster) return;
	return (
		<div className="w-36 pr-4">
			<img
				alt="Movie Poster"
				src={POSTER_CDN + poster}
				className="rounded-sm"
			></img>
		</div>
	);
};

export default MovieCard;
