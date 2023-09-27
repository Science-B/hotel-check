import { useHotels } from "../../hooks/hooks";
import { HotelItem } from "../hotel-item";

import { Hotel } from "../../api/interfaces";

import s from './hotels-list.module.scss'

export function HotelsList(): JSX.Element {
	const hotels = useHotels()
	return (
		<div className={s.wrap}>
			{hotels.map((hotel: Hotel) => (
				<HotelItem key={hotel.hotelId} hotel={hotel}/>
			))}
		</div>
	);
}
