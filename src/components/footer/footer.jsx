import React from 'react';
import {Link} from 'react-router-dom';
import cn from 'classnames';
import styles from './footer.module.scss';

import Logo from '../logo/logo';
import Socials from '../socials/socials';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.address}>
          <p className={styles.text}>
            150015, г. Москва, ул. Московская, д.&nbsp;32 <br /> Генеральная лицензия Банка России №1050 <br /> Ⓒ Лига Банк, 2019
          </p>
        </div>
        <div className={styles.menu}>
          <nav>
            <ul className={styles.list}>
              <li className={styles.list_item}>
                <Link className={styles.link} to="/">
                  Услуги
                </Link>
              </li>
              <li className={styles.list_item}>
                <Link className={styles.link} to="/">
                  Рассчитать кредит
                </Link>
              </li>
              <li className={styles.list_item}>
                <Link className={styles.link} to="/">
                  Контакты
                </Link>
              </li>
              <li className={styles.list_item}>
                <Link className={styles.link} to="/">
                  Задать вопрос
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.mobile}>
          <a className={cn(styles.link, styles.link_mobile)} href="tel: *0904">
            *0904
          </a>
          <p className={styles.text}>
            Бесплатно для абонентов <br /> МТС, Билайн, Мегафон, Теле2
          </p>
        </div>
        <div className={styles.phone}>
          <a className={cn(styles.link, styles.link_phone)} href="tel: 88001112233">
            8 800 111 22 33
          </a>
          <p className={styles.text}>
            Бесплатный для всех <br /> городов России
          </p>
        </div>
        <div className={styles.socials}>
          <Socials />
        </div>
      </div>
    </footer>
  );
}

export default  Footer;
