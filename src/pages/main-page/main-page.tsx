import React from 'react';
import { FavoritesCard } from '../../components/cards/favorites-card';
import { SearchCard } from '../../components/cards/search-card';
import { HotelsCard } from '../../components/cards/hotels-card';
import { Header } from '../../components/header/header';

export function MainPage(): JSX.Element {
	return (
		<div>
			<Header/>
			<div>
			<FavoritesCard/>
			<SearchCard/>
			<HotelsCard/>
		</div>
		</div>
		
	);
}
