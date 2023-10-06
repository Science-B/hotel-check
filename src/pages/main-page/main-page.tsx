import { SearchCard } from '../../components/cards/search-card';
import { HotelsCard } from '../../components/cards/hotels-card';
import { FavoritesCard } from '../../components/cards/favorites-card';
import { Header } from '../../components/header';

import s from './main-page.module.scss'

export function MainPage(): JSX.Element {
  return (
    <>
      <Header/>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.column}>
            <SearchCard/>
            <FavoritesCard/>
          </div>
          <div className={s.hotelsCard}>
            <HotelsCard/>
          </div>
        </div>
        
      </div>    
    </>
    
  );
}