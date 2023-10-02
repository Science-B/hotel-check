import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';

import { Hotel, HotelSearchParams, User } from '../api/interfaces';

export const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useHotels = (): Hotel[] => {
	const { hotels } = useAppSelector((state) => state.hotels);
	return hotels;
};

export const useSliders = (): string[] => {
	const { sliders } = useAppSelector((state) => state.sliders);
	return sliders;
};

export const useFavorites = (): Hotel[] => {
	const { favorites } = useAppSelector((state) => state.favorites);
	return favorites;
};

export const useHotelsSearchParams = (): HotelSearchParams => {
	const searchParams = useAppSelector((state) => state.searchParams);
	return searchParams;
};

export const useUser = (): User => {
	const user = useAppSelector((state) => state.user);
	return user;
};
