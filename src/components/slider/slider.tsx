import { Swiper, SwiperSlide } from 'swiper/react';
import { useSliders } from '../../hooks/hooks';
import s from './slider.module.scss';
import 'swiper/css';

export function Slider(): JSX.Element {
  const sliders = useSliders();

  // Определите массив breakpoints для настройки slidesPerView
  const breakpoints = {
	320: {
		slidesPerView: 1.5, 
		},
	640: {
		slidesPerView: 3.5,
		},
	768: {
		slidesPerView: 3.5,
		},
  };

  return (
    <Swiper spaceBetween={12} slidesPerView={3.5} breakpoints={breakpoints}>
      {sliders.map((slider) => (
        <SwiperSlide key={slider}>
          <div>
            <img src={slider} alt={`Slider ${slider}`} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}