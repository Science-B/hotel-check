import { createSlice } from '@reduxjs/toolkit';

import { SlidersState } from '../api/interfaces';

const initialState: SlidersState = {
	sliders: [
		'./assets/slider1.png',
		'./assets/slider2.png',
		'./assets/slider3.png',
		'./assets/slider4.png',
		'./assets/slider5.png',
		'./assets/slider6.png',
	],
};

const slidersSlice = createSlice({
	name: 'sliders',
	initialState: initialState,
	reducers: {},
});

const { reducer: slidersReducer } = slidersSlice;

export default slidersReducer;
