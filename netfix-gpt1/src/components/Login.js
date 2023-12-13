import React, { useState } from "react";
import Header from "./Header";
import { loginBg } from "../utils/mockData";

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);

	const toggleSignInForm = () => {
		setIsSignInForm(!isSignInForm);
	};

	return (
		<div className="">
			<Header />
			<img src={loginBg} alt="backgorund" className="absolute bg-cover "></img>

			<form className="absolute w-3/12 p-7 bg-black text-white right-0 left-0 mx-auto my-44 bg-opacity-80">
				{/* h-96 top-0 bottom-0 my-auto */}
				<h1 className="text-3xl font-bold my-5">
					{isSignInForm ? "Sign In" : "Sign Up"}
				</h1>

				{!isSignInForm && (
					<input
						type="text"
						placeholder="Full Name"
						className="p-3 w-full my-2 rounded bg-gray-800"
					></input>
				)}
				<input
					type="email"
					placeholder="Enter email"
					className="p-3 w-full my-2 rounded bg-gray-800"
				></input>
				<input
					type="password"
					placeholder="Password"
					className="p-3 w-full my-3 rounded bg-gray-800"
				></input>
				<button className="p-3 w-full bg-red-600 my-7 rounded">
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
