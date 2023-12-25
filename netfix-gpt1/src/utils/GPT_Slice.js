import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
	name: "GPT",
	initialState: {
		GPTContainer: false,
		movies: null,
		gptMovies: null,
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
	},
});

export const { showGPTContainer, addGptMovies } = GPTSlice.actions;
export default GPTSlice.reducer;
