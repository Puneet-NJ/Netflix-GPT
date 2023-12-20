import React from "react";
import { netflixLogo } from "../utils/mockData";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
	const navigate = useNavigate();
	const user = useSelector((store) => store?.user);

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				navigate("/");
			})
			.catch((error) => {
				// An error happened.
			});
	};

	return (
		<div className="w-full z-10 absolute bg-gradient-to-b from-black py-5 px-5 flex justify-between items-center">
			<img src={netflixLogo} alt="logo" className="w-44"></img>
			{user && (
				<div className="flex h-10 pr-10">
					<img
						alt="User Icon"
						src={user?.photoURL}
						// src="https://occ-0-2186-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABeuqjuQsRgqEDlibtJTI5BMf8IxhLlLOeIT6xI4TL57mqv7XHja43gx02S8pZVe8JNGRQXjnrUk1VcsTXqi83tFKPI6OR3k.png?r=bd7"
					></img>
					<button
						onClick={handleSignOut}
						className="cursor-pointer ml-5 text-white"
					>
						Sign Out
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
