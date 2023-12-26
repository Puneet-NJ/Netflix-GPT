import React from "react";
import GptSearchBar from "./GptSearchBar";
import { loginBg } from "../utils/mockData";
import GptMovieContainer from "./GptMovieContainer";

const GPT_CONTAINER = () => {
	return (
		<>
			<img
				src={loginBg}
				alt="Background"
				className="fixed -z-10 h-screen object-cover"
			></img>
			<div className="">
				<GptSearchBar />
				<GptMovieContainer />
			</div>
		</>
	);
};

export default GPT_CONTAINER;
