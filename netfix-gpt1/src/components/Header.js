import React, { useEffect } from "react";
import { netflixLogo } from "../utils/mockData";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { showGPTContainer } from "../utils/GPT_Slice";

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const user = useSelector((store) => store?.user);
	const gptContainer = useSelector((store) => store?.gpt?.GPTContainer);

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
				navigate("/error");
			});
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, displayName, email, photoURL } = user;
				dispatch(
					addUser({
						uid: uid,
						email: email,
						displayName: displayName,
						photoURL: photoURL,
					})
				);
				navigate("/browse");
			} else {
				dispatch(removeUser());
				navigate("/");
			}
		});

		// We need to remove this onAuthStateChanged everytime it is done(unmounted)
		return () => unsubscribe();
	}, []);

	const handleGPT = () => {
		dispatch(showGPTContainer());
	};

	const updateLanguage = () => {};

	return (
		<div className="w-full z-10 absolute bg-gradient-to-b from-black py-5 px-5 flex justify-between items-center">
			<img src={netflixLogo} alt="logo" className="w-44"></img>
			{user && (
				<div className="flex h-10 pr-10">
					{gptContainer && (
						<select
							onChange={updateLanguage}
							className="p-2 mr-7 shadow-md rounded cursor-pointer"
						>
							<option>English</option>
							<option>Hindi</option>
							<option>Spanish</option>
						</select>
					)}
					<button
						onClick={handleGPT}
						className="bg-red-700 px-3 py-2 cursor-pointer shadow-lg text-white mr-10 hover:scale-95 hover:bg-red-600 duration-150"
					>
						{gptContainer ? "Home" : "GPT Recommendation"}
					</button>
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
