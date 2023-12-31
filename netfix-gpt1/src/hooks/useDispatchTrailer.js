import { useEffect } from "react";
import { addTrailer } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/mockData";

const useDispatchTrailer = (movieId) => {
	const dispatch = useDispatch();

	const trailer = useSelector((store) => store.movies.trailer);

	// Get trailer and dispatch it to to movies section of ReduxStore
	const getTrailer = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/" +
				movieId +
				"/videos?language=en-US",
			API_OPTIONS
		);

		const json = await data.json();
		let trailer = json.results?.find((video) => video?.type === "Trailer");
		if (trailer === undefined) {
			trailer = json.results[0];
		}
		dispatch(addTrailer(trailer));
	};

	useEffect(() => {
		!trailer && getTrailer();
	}, []);
};

export default useDispatchTrailer;
