import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
	name: "GPT",
	initialState: {
		GPTContainer: false,
	},
	reducers: {
		showGPTContainer: (state, action) => {
			state.GPTContainer = !state.GPTContainer;
		},
	},
});

export const { showGPTContainer } = GPTSlice.actions;
export default GPTSlice.reducer;
