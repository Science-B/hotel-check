import React, { useState } from 'react';
import { useAppDispatch, useFavorites } from '../../../hooks/hooks';
import { HotelsList } from '../../hotels-list/hotels-list';

import { clearFavorites } from '../../../redux/favoritesSlice';

import { FavoritesHotelsSortingState } from '../../../api/interfaces';

import s from './favorites-card.module.scss';

import upIcon from '../../../icons/up.svg';
import upGrayIcon from '../../../icons/up-gray.svg';
import downIcon from '../../../icons/down.svg';
import downGrayIcon from '../../../icons/down-gray.svg';

export function FavoritesCard(): JSX.Element {
	const dispatch = useAppDispatch()
	const [sortingState, setSortingState] = useState<FavoritesHotelsSortingState>({
    sortByRating: 'asc',
    sortByPrice: null,
  });

  const favoritesHotels = useFavorites();
  const sortedHotels = [...favoritesHotels].sort((a, b) => {
    if (sortingState.sortByRating === 'asc') {
      return a.stars - b.stars;
    } else if (sortingState.sortByRating === 'desc') {
      return b.stars - a.stars;
    } else if (sortingState.sortByPrice === 'asc') {
      return a.priceFrom - b.priceFrom;
    } else if (sortingState.sortByPrice === 'desc') {
      return b.priceFrom - a.priceFrom;
    }
    return 0;
  });

  return (
    <div className={s.card}>
      <div className={s.container}>
        <div className={s.content}>
          <h2 className={s.title}>Избранное</h2>
          <div className={s.btnGroup}>
            <div className={s.sortGroup}>
              <div
                className={`${s.sortBtn} ${sortingState.sortByRating ? s.activeSort : ''}`}
                onClick={toggleSortByRating}
              >
                Рейтинг
                <div className={s.iconsGroup}>
                  <img src={sortingState.sortByRating === 'asc' ? upIcon : upGrayIcon} alt="Вверх" />
                  <img src={sortingState.sortByRating === 'desc' ? downIcon : downGrayIcon} alt="Вниз" />
                </div>
              </div>
              <div
                className={`${s.sortBtn} ${sortingState.sortByPrice ? s.activeSort : ''}`}
                onClick={toggleSortByPrice}
              >
                Цена
                <div className={s.iconsGroup}>
                  <img src={sortingState.sortByPrice === 'asc' ? upIcon : upGrayIcon} alt="Вверх" />
                  <img src={sortingState.sortByPrice === 'desc' ? downIcon : downGrayIcon} alt="Вниз" />
                </div>
              </div>
            </div>
			<div onClick={clearAllFavorites} className={s.clearBtn}>Очистить</div>
          </div>
          <div className={s.favoritesHotels}>
            {sortedHotels.length === 0 ? (
              <p className={s.emptyList}>Список избранного пуст</p>
            ) : (
              <HotelsList hotels={sortedHotels} isFav={true} />
            )}
          </div>
        </div>
      </div>
    </div>
  );

  function toggleSortByRating(): void {
    setSortingState((prevState) => ({
      sortByRating: prevState.sortByRating === 'asc' ? 'desc' : 'asc',
      sortByPrice: null,
    }));
  }

  function toggleSortByPrice(): void {
    setSortingState((prevState) => ({
      sortByPrice: prevState.sortByPrice === 'asc' ? 'desc' : 'asc',
      sortByRating: null,
    }));
  }

  function clearAllFavorites(): void {
	dispatch(clearFavorites())
  }
}

export default FavoritesCard;