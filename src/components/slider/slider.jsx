import React from 'react';
import cn from 'classnames';

import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination, Autoplay, A11y} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/a11y/a11y.scss';

import styles from './slider.module.scss';

SwiperCore.use([Pagination, Autoplay, A11y]);

function Slider() {
  return (
    <section>
      <Swiper
        slidesPerView={1}
        pagination
        autoplay={{delay: 4000, disableOnInteraction: false}}
        loop
        a11y
      >
        <SwiperSlide className={cn(styles.slide, styles.slide_cards)}>
          <div className={styles.wrapper}>
            <h2 className={cn(styles.heading, styles.heading_credit)}>
              Лига Банк
            </h2>
            <p className={cn(styles.text, styles.text_credit)}>
              Кредиты на любой случай
            </p>
            <a className={cn(styles.link, styles.link_credit)} href={'#credit'}>
              Рассчитать кредит
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className={cn(styles.slide, styles.slide_man)}>
          <div className={styles.wrapper}>
            <h2 className={styles.heading}>
              Лига Банк
            </h2>
            <p className={styles.text}>
              Ваша уверенность в завтрашнем дне
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={cn(styles.slide, styles.slide_girl)}>
          <div className={styles.wrapper}>
            <h2 className={styles.heading}>
              Лига Банк
            </h2>
            <p className={styles.text}>
              Всегда рядом
            </p>
            <a className={styles.link} href={'#map'}>
              Найти отделение
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Slider;
