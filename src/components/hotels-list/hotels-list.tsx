import React from 'react';
import { HotelItem } from "../hotel-item";

import { Hotel } from "../../api/interfaces";

import s from './hotels-list.module.scss'

interface HotelsListProps {
	hotels: Hotel[];
	isFav: boolean;
}

export function HotelsList(props: HotelsListProps): JSX.Element {
	const { hotels, isFav } = props;
	return (
		<> 
			{ hotels.length ? hotels.map((hotel: Hotel) => (
				<HotelItem key={hotel.hotelId} hotel={hotel} isFav={isFav}/>
			)) : <p className={s.emptyList}>Нет результатов по Вашему запросу</p>}
		</>
	);
}
