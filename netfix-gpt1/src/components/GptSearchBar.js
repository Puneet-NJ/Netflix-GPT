import React from "react";
import { loginBg } from "../utils/mockData";

const GptSearchBar = () => {
	return (
		<div className="">
			<img src={loginBg} alt="Background" className="absolute -z-10"></img>
			<form className=" pt-32 w-1/2 mx-auto grid grid-cols-12 p-2">
				<input
					placeholder="What do you want to watch today?"
					className="p-2 pl-5 border text-lg border-black col-span-9 text-black bg-white shadow-2xl"
				></input>
				<button className="ml-3 bg-red-700 col-span-3 rounded-md hover:bg-red-600 text-white hover:scale-95 duration-150 shadow-2xl">
					Search
				</button>
			</form>
		</div>
	);
};

export default GptSearchBar;
