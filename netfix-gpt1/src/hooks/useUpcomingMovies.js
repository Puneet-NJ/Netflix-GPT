import { useEffect } from "react";
import { API_OPTIONS } from "../utils/mockData";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
	const dispatch = useDispatch();

	const fetchUpcomingMovies = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
			API_OPTIONS
		);

		const json = await data.json();

		dispatch(addUpcomingMovies(json?.results));
	};

	useEffect(() => {
		fetchUpcomingMovies();
	}, []);
};

export default useUpcomingMovies;