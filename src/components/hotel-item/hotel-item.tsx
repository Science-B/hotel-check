import { generateRate } from "../../utils/generateRate";
import { formatPrice } from "../../utils/formatPrice";

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
	console.log('Hotel from HotelsList', hotel)
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
						<p>data</p>
						<img src={dash} alt="dash" />
						<p>data</p>
					</div>
					<div className={s.rating}>
						{generateRate(hotel.stars).map((el: boolean) =>el === true ? <img src={goldenStar} /> : <img src={emptyStar} />)}
					</div>
				</div>
				<div className={s.priceGroup}>
					<div className={s.heart}></div>
					<div className={s.price}>Price: <span>{formatPrice(hotel.priceFrom)} ₽</span></div>
				</div>
			</div>

		</div>
	);
}
