import s from "./header.module.scss";

import logOutIcon from '../../icons/logOut.svg'

export function Header(): JSX.Element {
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
		console.log('exit')
	}
}
