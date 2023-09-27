import React, {useState} from 'react';
import { useAppDispatch, useHotelsSearchParams } from '../../../hooks/hooks';

import { searchParamasUpdated } from '../../../redux/searchParamsSlice';

import { HotelSearchParams } from '../../../api/interfaces';

import s from './search-card.module.scss'

export function SearchCard(): JSX.Element {

	const initialFormData = useHotelsSearchParams()
	const dispatch = useAppDispatch()
	
	const [formData, setFormData] = useState<HotelSearchParams>({
		city: initialFormData.city,
		checkIn: initialFormData.checkIn,
		checkOut: initialFormData.checkOut,
		});
		
	return (
		<div className={s.card}>
			<div className={s.container}>
				<form onSubmit={handleSubmit} className={s.form} >
					<label htmlFor="location">Локация</label>
					<input 
					type="text"
					id="city"
					name="city"
					placeholder="Выберите город"
					value={formData.city}
					onChange={handleInputChange}/>
					<label htmlFor="checkIn">Дата заселения</label>
					<input 
					type="date"
					id="checkIn"
					name="checkIn"
					placeholder="Дата заселения"
					value={formData.checkIn}
					onChange={handleInputChange}/>
					<label htmlFor="checkOut">Дата выселения</label>
					<input 
					type="date"
					id="checkOut"
					name="checkOut"
					placeholder="Дата выселения"
					value={formData.checkOut}
					onChange={handleInputChange}/>
					<button >Найти</button>
				</form>
			</div>
		</div>
	);

	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
		const { name, value } = e.target;
		setFormData((prevData) => ({
		...prevData,
		[name]: value,
		}));
	}
	
	function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
		e.preventDefault()
		dispatch(searchParamasUpdated(formData))
	}
}