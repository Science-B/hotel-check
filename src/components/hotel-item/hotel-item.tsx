import React from 'react';
import classNames from "classnames";
import { useAppDispatch, useFavorites, useHotelsSearchParams } from "../../hooks";
import { toggleFavorites } from "../../redux/favoritesSlice";

import { generateRate } from "../../utils/generateRate";
import { formatPrice } from "../../utils/formatPrice";
import { transformDate } from "../../utils/transformDate";

import { Hotel } from "../../api/interfaces";

import s from './hotel-item.module.scss'

import logo from '../../icons/logo.svg'
import dash from '../../icons/dash.svg'
import goldenStar from '../../icons/goldenStar.svg'
import emptyStar from '../../icons/emptyStar.svg'

interface HotelsListProps {
	hotel: Hotel;
	isFav: boolean;
}

export function HotelItem(props: HotelsListProps): JSX.Element {
	const { hotel, isFav } = props
	const searchParmas = useHotelsSearchParams()
	const dispatch = useAppDispatch()
	const favoritesHotels = useFavorites()
	const isExists = favoritesHotels.some(favHotel => favHotel.hotelId === hotel.hotelId)
	return (
		<div className={classNames(s.wrap, isFav ? s.isFav : '')}>
			<div className={s.logo}>
				<img src={logo} alt="logo" />
			</div>
			<div className={s.info}>
				<div>
					<div className={s.nameGroup}>
					<h2 className={s.name}>
						{hotel.hotelName}
					</h2>
					<div onClick={()=> dispatch(toggleFavorites(hotel))} className={classNames(s.heart, isExists ? s.favorited : '')}></div>
					</div>
					<div className={s.dates}>
						<p>{transformDate(searchParmas.checkIn)}</p>
						<img src={dash} alt="dash" />
						<p>{transformDate(searchParmas.checkOut)}</p>
					</div>
					<div className={s.rateGroup}>
					<div className={s.rating}>
						{generateRate(hotel.stars).map((el: boolean) =>el === true ? <img src={goldenStar} /> : <img src={emptyStar} />)}
					</div>
					<div className={s.price}>Price: <span>{formatPrice(hotel.priceFrom)} ₽</span></div>
					</div>
				</div>
			</div>
			</div>
	);
}
