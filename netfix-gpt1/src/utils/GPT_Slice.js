import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
	name: "GPT",
	initialState: {
		GPTContainer: false,
		movies: null,
		gptMovies: null,
		language: "English",
	},
	reducers: {
		showGPTContainer: (state, action) => {
			state.GPTContainer = !state.GPTContainer;
		},
		addGptMovies: (state, action) => {
			const { gptMovies, movies } = action.payload;
			state.movies = movies;
			state.gptMovies = gptMovies;
		},

		changeLanguage: (state, action) => {
			state.language = action.payload;
		},
	},
});

export const { showGPTContainer, addGptMovies, changeLanguage } =
	GPTSlice.actions;
export default GPTSlice.reducer;
