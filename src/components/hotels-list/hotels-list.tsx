import { HotelItem } from "../hotel-item";

import { Hotel } from "../../api/interfaces";

interface HotelsListProps {
	hotels: Hotel[];
	isFav: boolean;
}

export function HotelsList(props: HotelsListProps): JSX.Element {
	const { hotels, isFav } = props;
	return (
		<>
			{hotels.map((hotel: Hotel) => (
				<HotelItem key={hotel.hotelId} hotel={hotel} isFav={isFav}/>
			))}
		</>
	);
}
