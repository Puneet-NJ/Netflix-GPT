import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
	const dispatch = useDispatch();

	// Could have used it, but will give error saying that it is outside RouterProvider.
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
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
			} else {
				dispatch(removeUser());
			}
		});
	}, []);
	const appRouter = createBrowserRouter([
		{ path: "/", element: <Login /> },
		{
			path: "/browse",
			element: <Browse />,
		},
	]);

	return (
		<div>
			<RouterProvider router={appRouter} />
		</div>
	);
};

export default Body;
