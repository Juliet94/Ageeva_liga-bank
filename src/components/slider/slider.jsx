import React from 'react';
import {Link} from 'react-router-dom';
import cn from 'classnames';

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
        autoplay={{delay: 4000, disableOnInteraction: false}}
        loop
      >
        <SwiperSlide className={cn(styles.slide, styles.slide_cards)}>
          <div className={styles.wrapper}>
            <h2 className={cn(styles.heading, styles.heading_credit)}>
              Лига банк
            </h2>
            <p className={cn(styles.text, styles.text_credit)}>
              Кредиты на любой случай
            </p>
            <Link className={cn(styles.link, styles.link_credit)} to="#credit">
              Рассчитать кредит
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className={cn(styles.slide, styles.slide_man)}>
          <div className={styles.wrapper}>
            <h2 className={styles.heading}>
              Лига банк
            </h2>
            <p className={styles.text}>
              Ваша уверенность в завтрашнем дне
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={cn(styles.slide, styles.slide_girl)}>
          <div className={styles.wrapper}>
            <h2 className={styles.heading}>
              Лига банк
            </h2>
            <p className={styles.text}>
              Всегда рядом
            </p>
            <Link className={styles.link} to="#map">
              Найти отделение
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Slider;
