import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { FavoritesState, Hotel } from '../api/interfaces';

const initialState: FavoritesState = {
	favorites: [],
};

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState: initialState,
	reducers: {
		toggleFavorites: (state, action: PayloadAction<Hotel>): void => {
			const isExists: boolean = state.favorites.some(
				(f: Hotel) => f.hotelId === action.payload.hotelId,
			);

			if (isExists) {
				const index = state.favorites.findIndex(
					(f: Hotel) => f.hotelId === action.payload.hotelId,
				);

				if (index !== -1) {
					state.favorites.splice(index, 1);
				}
			} else {
				state.favorites.push(action.payload);
			}
		},
		clearFavorites: (state): void => {
			state.favorites = [];
		},
	},
});
const { reducer: favoritesReducer, actions } = favoritesSlice;
export const { toggleFavorites, clearFavorites } = actions;

export default favoritesReducer;
