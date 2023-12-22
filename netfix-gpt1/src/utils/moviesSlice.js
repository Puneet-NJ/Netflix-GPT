import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
	name: "movies",
	initialState: {
		nowPlayingMovies: null,
		popularMovies: null,
		upcomingMovies: null,
		topRatedMovies: null,
		trailer: null,
	},
	reducers: {
		addPopularMovies: (state, action) => {
			state.popularMovies = action.payload;
		},
		addNowPlayingMovies: (state, action) => {
			state.nowPlayingMovies = action.payload;
		},
		addUpcomingMovies: (state, action) => {
			state.upcomingMovies = action.payload;
		},
		addTopRatedMovies: (state, action) => {
			state.topRatedMovies = action.payload;
		},
		addTrailer: (state, action) => {
			state.trailer = action.payload;
		},
	},
});

export const {
	addNowPlayingMovies,
	addPopularMovies,
	addUpcomingMovies,
	addTopRatedMovies,
	addTrailer,
} = moviesSlice.actions;
export default moviesSlice.reducer;
