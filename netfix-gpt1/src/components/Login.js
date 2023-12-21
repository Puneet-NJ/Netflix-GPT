import React, { useRef, useState } from "react";
import Header from "./Header";
import { loginBg, userIcon } from "../utils/mockData";
import validateForm from "../utils/validateForm";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);
	const [errMessage, setErrMessage] = useState(null);
	const dispatch = useDispatch();

	const email = useRef(null);
	const password = useRef(null);
	const fullName = useRef(null);

	const toggleSignInForm = () => {
		setIsSignInForm(!isSignInForm);
	};

	const handleSubmitButton = () => {
		const errMsg = validateForm(
			email.current.value,
			password.current.value,
			fullName?.current?.value
		);
		// console.log(errMsg);
		setErrMessage(errMsg);
		if (errMsg) return;

		if (!isSignInForm) {
			createUserWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					// Signed up
					const user = userCredential.user;
					updateProfile(user, {
						displayName: fullName?.current?.value,
						photoURL: userIcon,
					})
						.then(() => {
							// Profile updated!
							const { uid, displayName, email, photoURL } = auth.currentUser;
							dispatch(
								addUser({
									uid: uid,
									email: email,
									displayName: displayName,
									photoURL: photoURL,
								})
							);
							// ...
						})
						.catch((error) => {
							// An error occurred
							// ...
						});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrMessage(errorCode + "-" + errMessage);

					// console.log(errorMessage);
				});
		} else {
			// isSignUpform
			signInWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					// console.log(user);
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrMessage(errorCode + "-" + errMessage);
					// console.log(errorCode + "-" + errMessage);
				});
		}
	};
	return (
		<div className="">
			<Header />
			<img src={loginBg} alt="backgorund" className="absolute bg-cover "></img>

			<form
				onSubmit={(e) => e.preventDefault()}
				className="absolute w-3/12 p-7 bg-black text-white right-0 left-0 mx-auto my-44 bg-opacity-80"
			>
				{/* h-96 top-0 bottom-0 my-auto */}
				<h1 className="text-3xl font-bold my-5">
					{isSignInForm ? "Sign In" : "Sign Up"}
				</h1>

				{!isSignInForm && (
					<input
						ref={fullName}
						type="text"
						placeholder="Full Name"
						className="p-3 w-full my-2 rounded bg-gray-800"
					></input>
				)}
				<input
					ref={email}
					type="text"
					placeholder="Enter email"
					className="p-3 w-full my-2 rounded bg-gray-800"
				></input>
				<input
					ref={password}
					type="password"
					placeholder="Password"
					className="p-3 w-full my-3 rounded bg-gray-800"
				></input>
				<p className="font-bold text-red-700 py-2">{errMessage}</p>

				<button
					className="p-3 w-full bg-red-600 my-7 rounded"
					onClick={handleSubmitButton}
				>
					{isSignInForm ? "Sign In" : "Sign Up"}
				</button>

				<div>
					{isSignInForm ? (
						<div>
							New to Netflix?{" "}
							<span
								className="cursor-pointer hover:underline"
								onClick={toggleSignInForm}
							>
								Sign Up now
							</span>
						</div>
					) : (
						<div>
							{" "}
							Already Registered?{" "}
							<span
								className="cursor-pointer hover:underline"
								onClick={toggleSignInForm}
							>
								Sign In now
							</span>
						</div>
					)}
				</div>
			</form>
		</div>
	);
};

export default Login;
