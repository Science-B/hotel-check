import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
	persistReducer,
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import hotelsReducer from './hotelsSlice';
import slidersReducer from './slidersSlice';
import favoritesReducer from './favoritesSlice';
import searchParamsReducer from './searchParamsSlice';
import userReducer from './userSlice';

const rootReducer = combineReducers({
	hotels: hotelsReducer,
	sliders: slidersReducer,
	favorites: favoritesReducer,
	searchParams: searchParamsReducer,
	user: userReducer,
});

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['favorites', 'user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const setupStore = () => {
	const store = configureStore({
		reducer: persistedReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [
						FLUSH,
						REHYDRATE,
						PAUSE,
						PERSIST,
						PURGE,
						REGISTER,
					],
				},
			}),
	});

	const persistor = persistStore(store);

	return { store, persistor };
};

export type RootState = ReturnType<typeof persistedReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = ReturnType<typeof setupStore>['store']['dispatch'];
