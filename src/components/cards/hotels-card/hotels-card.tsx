import { useEffect } from "react"
import { useAppDispatch, useHotels } from "../../../hooks/hooks"
import { HotelsList } from "../../hotels-list/hotels-list";

import { loadHotelsList } from "../../../redux/hotelsSlice";

import s from "./hotels-card.module.scss";

import ArrowIcon from '../../../icons/arrow.svg'
import { Slider } from "../../slider/slider";

export function HotelsCard(): JSX.Element {
	const dispatch = useAppDispatch()
	const hotels = useHotels()

	useEffect(() => {
		dispatch(loadHotelsList({city: 'Чикаго', checkIn: '2023-09-25', checkOut: '2023-09-30'}))
	},[])
	
	return (
		<div className={s.card}>
			<div className={s.container}>
			<div className={s.header}>
				<div className={s.group}>
					<p>Отели</p>
					<img src={ArrowIcon} alt="arrow-icon" />
					<p>fetchParams.city</p>
				</div> 
				<span>fetchParams.checkIn</span>
			</div>
			<div className={s.slider}><Slider/></div>
			<p className={s.favorites}>Добавлено в избранное: <span>favorites.length</span> отеля</p>
			<HotelsList hotels={hotels}/>
			</div>
		</div>
	);
}
