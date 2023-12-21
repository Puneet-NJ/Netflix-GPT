import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/mockData";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
	// Take data from TMDB and dispatch it.
	const dispatch = useDispatch();

	const now_playing = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
			API_OPTIONS
		);

		const json = await data.json();
		dispatch(addNowPlayingMovies(json.results));
	};

	useEffect(() => {
		now_playing();
	}, []);
};

export default useNowPlayingMovies;
