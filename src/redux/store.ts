import { combineReducers, configureStore } from '@reduxjs/toolkit';

import hotelsReducer from './hotelsSlice';
import slidersReducer from './slidersSlice';
import favoritesReducer from './favoritesSlice';

const rootReducer = combineReducers({
	hotels: hotelsReducer,
	sliders: slidersReducer,
	favorites: favoritesReducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
