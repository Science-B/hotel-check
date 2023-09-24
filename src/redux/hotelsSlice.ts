import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

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
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(loadHotelsList.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(
				loadHotelsList.fulfilled,
				(state, action: PayloadAction<Hotel[]>) => {
					state.isLoading = false;
					state.error = '';
					state.hotels = action.payload;
				},
			)
			.addCase(loadHotelsList.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			});
	},
});

const { reducer: hotelsReducer } = hotelsSlice;

export const loadHotelsList = createAsyncThunk<
	Hotel[],
	HotelSearchParams,
	{ rejectValue: string }
>('hotels/fetchAll', async (params, thunkApi) => {
	const { city, checkIn, checkOut } = params;
	try {
		const data = await hotelService.get(city, checkIn, checkOut);
		return data;
	} catch (error) {
		if (error instanceof Error) {
			return thunkApi.rejectWithValue(error.message);
		} else {
			return thunkApi.rejectWithValue('Error from loadHotelsList');
		}
	}
});

export default hotelsReducer;
