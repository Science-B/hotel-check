import { Swiper, SwiperSlide } from 'swiper/react';
import { useSliders } from '../../hooks';
import 'swiper/css';

import s from './slider.module.scss'

export function Slider(): JSX.Element {
  const sliders = useSliders();
  return (
    <Swiper className={s.swiper} spaceBetween={12} slidesPerView={'auto'} >
      {sliders.map((slider) => (
        <SwiperSlide className={s.slide} key={slider}>
          <div>
            <img src={slider} alt={`Slider ${slider}`} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}