import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import cn from 'classnames';
import styles from './services.module.scss';

import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Thumbs, Pagination, A11y} from 'swiper';

import desktopPig from '../../assets/images/desktop-tabs-pig.jpg';
import tabletPig from '../../assets/images/tablet-tabs-pig.jpg';
import mobilePig from '../../assets/images/mobile-tabs-pig.jpg';
import desktopCar from '../../assets/images/desktop-tabs-car.jpg';
import tabletCar from '../../assets/images/tablet-tabs-car.jpg';
import mobileCar from '../../assets/images/mobile-tabs-car.jpg';
import desktopLock from '../../assets/images/desktop-tabs-lock.jpg';
import tabletLock from '../../assets/images/tablet-tabs-lock.jpg';
import mobileLock from '../../assets/images/mobile-tabs-lock.jpg';
import desktopMobile from '../../assets/images/desktop-tabs-mobile.jpg';
import tabletMobile from '../../assets/images/tablet-tabs-mobile.jpg';
import mobileMobile from '../../assets/images/mobile-tabs-mobile.jpg';


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
            simulateTouch
            pagination
            a11y
          >
            <SwiperSlide
              className={styles.slide_tabs}
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
              <picture>
                <source media="(max-width: 767px)" srcSet={mobilePig} />
                <source media="(max-width: 1023px)" srcSet={tabletPig} />
                <img alt="Свинья-копилка с монетами" className={cn(styles.img, styles.img_pig)} src={desktopPig} />
              </picture>
            </SwiperSlide>
            <SwiperSlide
              className={styles.slide_tabs}
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
                <a className={styles.link_in_text} href={'#credit'}>кредитным калькулятором</a>
              </p>
              <picture>
                <source media="(max-width: 767px)" srcSet={mobileCar} />
                <source media="(max-width: 1023px)" srcSet={tabletCar} />
                <img alt="Машина на стопке монет" className={styles.img} src={desktopCar} />
              </picture>
            </SwiperSlide>
            <SwiperSlide
              className={styles.slide_tabs}
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
              <picture>
                <source media="(max-width: 767px)" srcSet={mobileLock} />
                <source media="(max-width: 1023px)" srcSet={tabletLock} />
                <img alt="Закрытый замок с сердечком" className={styles.img} src={desktopLock} />
              </picture>
            </SwiperSlide>
            <SwiperSlide
              className={styles.slide_tabs}
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
              <picture>
                <source media="(max-width: 767px)" srcSet={mobileMobile} />
                <source media="(max-width: 1023px)" srcSet={tabletMobile} />
                <img alt="Мобильный телефон с приложением Лига Банк" className={styles.img} src={desktopMobile} />
              </picture>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Services;
