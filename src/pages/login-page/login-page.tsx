import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { FieldSet } from '../../components/UI/field-set';
import { FormButton } from '../../components/UI/form-button';

import { userLogIn } from '../../redux/userSlice';

import { validator } from '../../utils/validator';

import { User, LoginFormErrors } from '../../api/interfaces';

import s from './login-page.module.scss'

export function LoginPage(): JSX.Element {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const [formData, setFormData] = useState<User>({
		login: '',
		password: '',
		});
	const [errors, setErrors] = useState<LoginFormErrors>({
		login: '',
		password: '',
	});	
	const loginValidatorConfig = {
		login: {
			isRequired: {
				message: 'Логин обязателен для заполнения',
			},
			сyrillic: {
				message: 'Логин содержит кириллицу или спец. символы',
			},
		},
		password: {
			isRequired: {
				message: 'Пароль обязателен для заполнения',
			},
			min: {
				message: 'Пароль должен состаять миниму из 8 символов',
				value: 8,
			},
			сyrillic: {
				message: 'Пароль содержит кириллицу или спец. символы',
			},
		},
		
	};
	
	useEffect(() => {
		if (formData.login || formData.password) {
		validate();
		}
	}, [formData]);

	
  return (
	<div className={s.loginPage}>
			<div className={s.card}>
			<div className={s.content}>
			<h2 className={s.title}>Simple Hotel Check</h2>
			<form className={s.form} onSubmit={handleSubmit}>
				<FieldSet label='Логин' id='login' name='login' placeholderText='Введите логин' value={formData.login} onChange={handleInputChange} error={errors?.login}/>
				<FieldSet label='Пароль' type='password' id='password' name='password' placeholderText='Введите пароль' value={formData.password} onChange={handleInputChange} error={errors?.password}/>
				<FormButton text='Войти'/>
			</form>
			</div>
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

function validate(): boolean {
	const errors = validator(formData, loginValidatorConfig);
	setErrors(errors);
	return Object.keys(errors).length === 0;
}

function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
	e.preventDefault()
	const isValid = validate();
	if (!isValid) return;
	dispatch(userLogIn(formData))
	navigate("/", { replace: true });
}
}