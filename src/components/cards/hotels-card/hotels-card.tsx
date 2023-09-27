import { useEffect } from "react"
import { useAppDispatch, useHotelsSearchParams } from "../../../hooks/hooks"
import { HotelsList } from "../../hotels-list/hotels-list";

import { loadHotelsList } from "../../../redux/hotelsSlice";

import s from "./hotels-card.module.scss";

import ArrowIcon from '../../../icons/arrow.svg'
import { Slider } from "../../slider/slider";
import  {transformDate}  from "../../../utils/transformDate";

export function HotelsCard(): JSX.Element {
	const dispatch = useAppDispatch()
	const searchParams = useHotelsSearchParams()

	useEffect(() => {
		dispatch(loadHotelsList(searchParams))
	},[searchParams])
	
	return (
		<div className={s.card}>
			<div className={s.container}>
			<div className={s.header}>
				<div className={s.group}>
					<p>Отели</p>
					<img src={ArrowIcon} alt="arrow-icon" />
					<p>{searchParams.city}</p>
				</div> 
				<span>{transformDate(searchParams.checkIn)}</span>
			</div>
			<div className={s.slider}><Slider/></div>
			<p className={s.favorites}>Добавлено в избранное: <span>favorites.length</span> отеля</p>
			<HotelsList />
			</div>
		</div>
	);
}
