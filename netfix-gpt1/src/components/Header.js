import React from "react";
import { netflixLogo } from "../utils/mockData";

const Header = () => {
	return (
		<div className="">
			<img
				src={netflixLogo}
				alt="logo"
				className="w-64 z-10 absolute bg-gradient-to-b from-black py-5 px-5"
			></img>
		</div>
	);
};

export default Header;
