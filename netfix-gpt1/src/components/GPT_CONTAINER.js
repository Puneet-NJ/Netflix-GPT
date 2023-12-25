import React from "react";
import GptSearchBar from "./GptSearchBar";
import { loginBg } from "../utils/mockData";
import GptMovieContainer from "./GptMovieContainer";

const GPT_CONTAINER = () => {
	return (
		<div>
			<img src={loginBg} alt="Background" className="fixed -z-10"></img>
			<GptSearchBar />
			<GptMovieContainer />
		</div>
	);
};

export default GPT_CONTAINER;
