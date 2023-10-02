import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { HotelSearchParams, SearchParamsState } from '../api/interfaces';
import { formatDate } from '../utils/formatDate';

const initialState: SearchParamsState = {
	city: 'Москва',
	checkIn: formatDate(new Date()),
	checkOut: formatDate(new Date()),
};

const searchParamsSlice = createSlice({
	name: 'searchParams',
	initialState: initialState,
	reducers: {
		searchParamasUpdated: (
			state,
			action: PayloadAction<HotelSearchParams>,
		): void => {
			state.city = action.payload.city;
			state.checkIn = action.payload.checkIn;
			state.checkOut = action.payload.checkOut;
		},
	},
});
const { reducer: searchParamsReducer, actions } = searchParamsSlice;
export const { searchParamasUpdated } = actions;

export default searchParamsReducer;
