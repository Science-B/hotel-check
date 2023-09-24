import axios from 'axios';

import { Hotel } from '../api/interfaces';

const hotelService = {
	get: async (
		city: string,
		checkIn: string,
		checkOut: string,
	): Promise<Hotel[]> => {
		const { data } = await axios.get<Hotel[]>(
			`http://engine.hotellook.com/api/v2/cache.json?location=${city}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`,
		);
		return data;
	},
};

export default hotelService;
