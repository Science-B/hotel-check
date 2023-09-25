import { createSlice } from '@reduxjs/toolkit';

import { slidersState } from '../api/interfaces';

const initialState: slidersState = {
	sliders: [
		'/src/icons/slider1.png',
		'/src/icons/slider2.png',
		'/src/icons/slider3.png',
		'/src/icons/slider4.png',
		'/src/icons/slider5.png',
		'/src/icons/slider6.png',
	],
};

const slidersSlice = createSlice({
	name: 'sliders',
	initialState: initialState,
	reducers: {},
});

const { reducer: slidersReducer } = slidersSlice;

export default slidersReducer;
