import React, {useState} from 'react';
import { useAppDispatch, useHotelsSearchParams } from '../../../hooks/hooks';
import { FieldSet } from '../../UI/field-set';
import { FormButton } from '../../UI/form-button';

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
					<FieldSet 
					label='Локация' 
					id='city' 
					name='city' 
					placeholderText='Выберерите город' 
					value={formData.city}
					onChange={handleInputChange}/>
					
					<FieldSet
					label='Дата заселения' 
					type='date' 
					id='checkIn' 
					name='checkIn' 
					placeholderText='Дата заселения'
					value={formData.checkIn} 
					onChange={handleInputChange}/>

					<FieldSet 
					label='Дата выселения' 
					type='date' 
					id='checkOut' 
					name='checkOut' 
					placeholderText='Дата выселения' 
					value={formData.checkOut} 
					onChange={handleInputChange}/>
					<FormButton text='Найти'/>
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