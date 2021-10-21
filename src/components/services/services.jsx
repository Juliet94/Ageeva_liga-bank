import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import cn from 'classnames';
import styles from './services.module.scss';

import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Thumbs, Pagination, A11y} from 'swiper';

SwiperCore.use([Thumbs, Pagination, A11y]);

function Services() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [swiper, setSwiper] = useState(null);

  return (
    <section className={styles.section}>
      <h2 className="visually-hidden">
        Услуги
      </h2>
      <div className={styles.wrapper}>
        <div>
          <Swiper
            className={styles.slider_thumbs}
            onSwiper={setThumbsSwiper}
            slidesPerView={4}
            allowTouchMove={false}
            simulateTouch
            a11y
          >
            <SwiperSlide className={styles.slide_thumb}>
              <h3 className={cn(styles.heading, styles.heading_vault)}>
                Вклады
              </h3>
            </SwiperSlide>
            <SwiperSlide className={styles.slide_thumb}>
              <h3 className={cn(styles.heading, styles.heading_cards)}>
                Кредиты
              </h3>
            </SwiperSlide>
            <SwiperSlide className={styles.slide_thumb}>
              <h3 className={cn(styles.heading, styles.heading_shield)}>
                Страхование
              </h3>
            </SwiperSlide>
            <SwiperSlide className={styles.slide_thumb}>
              <h3 className={cn(styles.heading, styles.heading_phone)}>
                Онлайн-сервисы
              </h3>
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <Swiper
            className={cn('slider_tabs', styles.slider_tabs)}
            onSwiper={setSwiper}
            thumbs={{swiper: thumbsSwiper}}
            pagination
            a11y
          >
            <SwiperSlide
              className={cn(styles.slide_tabs, styles.slide_tabs_pig)}
              tabIndex='0'
              onFocus={() => swiper.slideTo(0)}
            >
              <p className={styles.text}>
                Вклады Лига Банка &ndash; это выгодная <br /> инвестиция в свое будущее
              </p>
              <ul className={styles.list}>
                <li className={styles.list_item}>
                  Проценты по вкладам до 7%
                </li>
                <li className={styles.list_item}>
                  Разнообразные условия
                </li>
                <li className={styles.list_item}>
                  Возможность ежемесячной капитализации или вывод процентов на банковскую карту
                </li>
              </ul>
              <Link className={styles.link} to="/">
                Узнать подробнее
              </Link>
            </SwiperSlide>
            <SwiperSlide
              className={cn(styles.slide_tabs, styles.slide_tabs_car)}
              tabIndex='0'
              onFocus={() => swiper.slideTo(1)}
            >
              <p className={styles.text}>
                Лига Банк выдает кредиты <br /> под любые цели
              </p>
              <ul className={cn(styles.list, styles.list_car)}>
                <li className={styles.list_item}>
                  Ипотечный кредит
                </li>
                <li className={styles.list_item}>
                  Автокредит
                </li>
                <li className={styles.list_item}>
                  Потребительский кредит
                </li>
              </ul>
              <p className={styles.text_with_link}>
                Рассчитайте ежемесячный платеж <br /> и ставку по кредиту воспользовавшись <br /> нашим&nbsp;
                <a className={styles.link_in_text} href="/">кредитным калькулятором</a>
              </p>
            </SwiperSlide>
            <SwiperSlide
              className={cn(styles.slide_tabs, styles.slide_tabs_lock)}
              tabIndex='0'
              onFocus={() => swiper.slideTo(2)}
            >
              <p className={styles.text}>
                Лига Страхование &mdash; застрахуем <br /> все что захотите
              </p>
              <ul className={styles.list}>
                <li className={styles.list_item}>
                  Автомобильное страхование
                </li>
                <li className={styles.list_item}>
                  Страхование жизни и здоровья
                </li>
                <li className={styles.list_item}>
                  Страхование недвижимости
                </li>
              </ul>
              <Link className={styles.link} to="/">
                Узнать подробнее
              </Link>
            </SwiperSlide>
            <SwiperSlide
              className={cn(styles.slide_tabs, styles.slide_tabs_mobile)}
              tabIndex='0'
              onFocus={() => swiper.slideTo(3)}
            >
              <p className={cn(styles.text, styles.text_app)}>
                Лига Банк &mdash; это огромное количество онлайн-сервисов для вашего удобства
              </p>
              <ul className={styles.list}>
                <li className={styles.list_item}>
                  Мобильный банк, <br /> который всегда под рукой
                </li>
                <li className={cn(styles.list_item, styles.list_item_app)}>
                  Приложение Лига-проездной позволит вам оплачивать билеты по всему миру
                </li>
              </ul>
              <Link className={styles.link} to="/">
                Узнать подробнее
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Services;
