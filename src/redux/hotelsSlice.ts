import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { AppDispatch } from './store';

import hotelService from '../services/hotels-service';

import { HotelState, Hotel, HotelSearchParams } from '../api/interfaces';

const initialState: HotelState = {
	hotels: [],
	isLoading: false,
	error: '',
};

const hotelsSlice = createSlice({
	name: 'hotels',
	initialState: initialState,
	reducers: {
		hotelsRequested: (state) => {
			state.isLoading = true;
		},
		hotelsReceived: (state, action: PayloadAction<Hotel[]>) => {
			state.isLoading = false;
			state.error = '';
			state.hotels = action.payload;
		},
		hotelsRequestFailed: (state, action: PayloadAction<string>) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

const { reducer: hotelsReducer, actions } = hotelsSlice;
const { hotelsRequested, hotelsReceived, hotelsRequestFailed } = actions;

export const loadHotelsList =
	(params: HotelSearchParams) => async (dispatch: AppDispatch) => {
		const { city, checkIn, checkOut } = params;
		dispatch(hotelsRequested());
		try {
			const response = await hotelService.get(city, checkIn, checkOut);
			dispatch(hotelsReceived(response));
		} catch (error) {
			if (error instanceof Error) {
				dispatch(hotelsRequestFailed(error.message));
			} else {
				dispatch(
					hotelsRequestFailed('Unknown error from loadHotelsList'),
				);
			}
		}
	};

export default hotelsReducer;
