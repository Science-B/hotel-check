import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';

import { Hotel } from '../api/interfaces';

export const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useHotels = (): Hotel[] => {
	const { hotels } = useAppSelector((state) => state.hotels);
	return hotels;
};
