import React from 'react';
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { userLogOut } from "../../redux/userSlice";

import s from "./header.module.scss";

import logOutIcon from '../../icons/logOut.svg'

export function Header(): JSX.Element {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	return (
		<div className={s.header}>
		<div className={s.name}>Simple Hotel Check</div>
		<a onClick={handleExit} href='#!' className={s.btnGroup}>
			<p>Выйти</p>
			<img src={logOutIcon} alt="logOut-btn" />
		</a>
		</div>
	);

	function handleExit(): void {
		navigate("/login", { replace: true });
		dispatch(userLogOut())
	}
}
