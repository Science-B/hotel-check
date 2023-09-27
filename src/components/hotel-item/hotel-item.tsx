import { useAppDispatch, useHotelsSearchParams } from "../../hooks/hooks";
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
}

export function HotelItem(props: HotelsListProps): JSX.Element {
	const { hotel } = props
	const searchParmas = useHotelsSearchParams()
	const dispatch = useAppDispatch()
	return (
		<div className={s.wrap}>
			<div className={s.logo}>
				<img src={logo} alt="logo" />
			</div>
			<div className={s.info}>
				<div>
					<h2 className={s.name}>
						{hotel.hotelName}
					</h2>
					<div className={s.dates}>
						<p>{transformDate(searchParmas.checkIn)}</p>
						<img src={dash} alt="dash" />
						<p>{transformDate(searchParmas.checkOut)}</p>
					</div>
					<div className={s.rating}>
						{generateRate(hotel.stars).map((el: boolean) =>el === true ? <img src={goldenStar} /> : <img src={emptyStar} />)}
					</div>
				</div>
				<div className={s.priceGroup}>
					<div onClick={()=> dispatch(toggleFavorites(hotel))} className={s.heart}></div>
					<div className={s.price}>Price: <span>{formatPrice(hotel.priceFrom)} ₽</span></div>
				</div>
			</div>

		</div>
	);
}
