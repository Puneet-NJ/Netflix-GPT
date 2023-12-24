import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import GPTReducer from "./GPT_Slice";

const appStore = configureStore({
	reducer: {
		user: userReducer,
		movies: moviesReducer,
		gpt: GPTReducer,
	},
});

export default appStore;
