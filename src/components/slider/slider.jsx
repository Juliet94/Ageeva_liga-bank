import React from 'react';
import {Link} from 'react-router-dom';

import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination, Autoplay} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

import styles from './slider.module.scss';

SwiperCore.use([Pagination, Autoplay]);

function Slider() {
  return (
    <section>
      <Swiper
        slidesPerView={1}
        pagination
        autoplay={{delay: 4000}}
        loop
      >
        <SwiperSlide className={styles.slide}>
          <div className={styles.wrapper}>
            <h2>
              Лига банк
            </h2>
            <p>
              Кредиты на любой случай
            </p>
            <Link to="#credit">
              Рассчитать кредит
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.wrapper}>
            <h2>
              Лига банк
            </h2>
            <p>
              Ваша уверенность в завтрашнем дне
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.wrapper}>
            <h2>
              Лига банк
            </h2>
            <p>
              Всегда рядом
            </p>
            <Link to="#map">
              Найти отделение
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Slider;
