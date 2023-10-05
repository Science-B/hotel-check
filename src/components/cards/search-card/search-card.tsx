import React, {useState, useEffect} from 'react';
import { useAppDispatch, useHotelsSearchParams } from '../../../hooks/hooks';
import { FieldSet } from '../../UI/field-set';
import { FormButton } from '../../UI/form-button';

import { searchParamasUpdated } from '../../../redux/searchParamsSlice';

import { HotelSearchParams, SearchFormErrors  } from '../../../api/interfaces';

import { validator } from '../../../utils/validator';

import s from './search-card.module.scss'
import { getCurrentDate } from '../../../utils/getCurrentDate';
import { SideCard } from '../../UI/side-card';

export function SearchCard(): JSX.Element {
    const initialFormData = useHotelsSearchParams();
    const dispatch = useAppDispatch();
    const [errors, setErrors] = useState<SearchFormErrors>({
        city: '',
        checkIn: '',
        checkOut: '',
    });
    const SearchValidatorConfig = {
        city: {
            isRequired: {
                message: 'Поле не может быть пустым',
            },
            specials: {
                message: 'Поле содержит спец. символы',
            },
        },
        checkIn: {
            isRequired: {
                message: 'Поле не может быть пустым',
            },
        },
        checkOut: {
            isRequired: {
                message: 'Поле не может быть пустым',
            },
        },
    };

    const [formData, setFormData] = useState<HotelSearchParams>({
        city: initialFormData.city,
        checkIn: initialFormData.checkIn,
        checkOut: initialFormData.checkOut,
    });

    useEffect(() => {
        if (formData.city || formData.checkIn || formData.checkOut) {
            validate();
        }
    }, [formData]);

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    function validate(): boolean {
        const errors = validator(formData, SearchValidatorConfig);
        if (formData.checkIn && formData.checkOut && formData.checkIn > formData.checkOut) {
            errors.checkOut = 'Дата выезда не может быть меньше даты заезда';
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        dispatch(searchParamasUpdated(formData));
    }

    return (
        <SideCard>
            <form onSubmit={handleSubmit} className={s.form}>
                <FieldSet
                    label='Локация'
                    id='city'
                    name='city'
                    placeholderText='Выберерите город'
                    value={formData.city}
                    onChange={handleInputChange}
                    error={errors?.city}
                    min={getCurrentDate()}
                />

                <FieldSet
                    label='Дата заселения'
                    type='date'
                    id='checkIn'
                    name='checkIn'
                    placeholderText='Дата заселения'
                    value={formData.checkIn}
                    onChange={handleInputChange}
                    error={errors?.checkIn}
                    min={getCurrentDate()}
                />

                <FieldSet
                    label='Дата выселения'
                    type='date'
                    id='checkOut'
                    name='checkOut'
                    placeholderText='Дата выселения'
                    value={formData.checkOut}
                    onChange={handleInputChange}
                    error={errors?.checkOut}
                    min={formData.checkIn}
                />
                <FormButton text='Найти' />
            </form>
        </SideCard>
    );
}