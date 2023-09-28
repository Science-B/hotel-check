import { SearchCard } from '../../components/cards/search-card';
import { HotelsCard } from '../../components/cards/hotels-card';
import { FavoritesCard } from '../../components/cards/favorites-card';
import { Header } from '../../components/header/header';

import s from './main-page.module.scss'

export function MainPage(): JSX.Element {
	return (
		<>
			<Header/>
			<div className={s.wrap}>
				<div className={s.column}>
				<SearchCard/>
				<FavoritesCard/>
				</div>
			<HotelsCard/>
		</div>
		</>
		
	);
}
