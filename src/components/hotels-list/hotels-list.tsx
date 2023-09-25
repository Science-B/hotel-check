import { HotelItem } from "../hotel-item";

import { Hotel } from "../../api/interfaces";

import s from './hotels-list.module.scss'

interface HotelsListProps {
	hotels: Hotel[];
}

export function HotelsList(props: HotelsListProps): JSX.Element {
	const {hotels} = props
	return (
		<div className={s.wrap}>
			{hotels.map((hotel: Hotel) => (
				<HotelItem key={hotel.hotelId} hotel={hotel}/>
			))}
		</div>
	);
}
