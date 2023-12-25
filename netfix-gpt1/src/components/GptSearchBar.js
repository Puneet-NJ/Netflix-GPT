import React, { useRef } from "react";
import { API_OPTIONS, loginBg } from "../utils/mockData";
import openai from "../utils/openai";

const GptSearchBar = () => {
	const userInput = useRef(null);

	const getMovieFromTMDB = async (movie) => {
		const data = await fetch(
			"https://api.themoviedb.org/3/search/movie?query=" +
				movie +
				"&include_adult=false&language=en-US&page=1",
			API_OPTIONS
		);

		const json = await data.json();

		return json.results;
	};

	const handleGptSearch = async () => {
		const toSearch = userInput?.current?.value;

		const query =
			"Imagine you are a movie recommendation system. give me 5 movies, comma seperated for the query. For example: movie, movie2, movie3, movie4, movie5. Query:" +
			toSearch;

		const gptResults = await openai.chat.completions.create({
			messages: [{ role: "user", content: query }],
			model: "gpt-3.5-turbo",
		});

		const gptMovies = gptResults?.choices[0]?.message?.content;

		const gptMoviesArr = gptMovies.split(", ");
		console.log(gptMoviesArr);

		const tmdbMovies = gptMoviesArr.map((movie) => getMovieFromTMDB(movie));
		const movies = await Promise.all(tmdbMovies);
		console.log(movies);
	};

	return (
		<div className="">
			<img src={loginBg} alt="Background" className="absolute -z-10"></img>
			<form
				className=" pt-32 w-1/2 mx-auto grid grid-cols-12 p-2"
				onSubmit={(e) => e.preventDefault()}
			>
				<input
					ref={userInput}
					placeholder="What do you want to watch today?"
					className="p-2 pl-5 border text-lg border-black col-span-9 text-black bg-white shadow-2xl"
				></input>
				<button
					onClick={handleGptSearch}
					className="ml-3 bg-red-700 col-span-3 rounded-md hover:bg-red-600 text-white hover:scale-95 duration-150 shadow-2xl"
				>
					Search
				</button>
			</form>
		</div>
	);
};

export default GptSearchBar;
