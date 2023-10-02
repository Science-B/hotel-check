import React, {useState} from 'react';
import { TextField } from '../../components/UI/text-field';
import { FormButton } from '../../components/UI/form-button';

import { useAppDispatch } from '../../hooks/hooks';

import { User } from '../../api/interfaces';
import { userLogIn } from '../../redux/userSlice';

import s from './login-page.module.scss'

export function LoginPage(): JSX.Element {

	const dispatch = useAppDispatch()

	const [formData, setFormData] = useState<User>({
		login: '',
		password: '',
		});
  return (
	<div className={s.loginPage}>
			<div className={s.card}>
			<div className={s.content}>
			<h2 className={s.title}>Simple Hotel Check</h2>
			<form className={s.form} onSubmit={handleSubmit}>
				<TextField label='Логин' id='login' name='login' placeholderText='Введите логин' value={formData.login} onChange={handleInputChange}/>
				<TextField label='Пароль' type='password' id='password' name='password' placeholderText='Введите пароль' value={formData.password} onChange={handleInputChange}/>
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

function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
	e.preventDefault()
	dispatch(userLogIn(formData))
	console.log('formData', formData)

}
}