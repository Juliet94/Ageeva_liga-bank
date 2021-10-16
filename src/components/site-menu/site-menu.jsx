import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import cn from 'classnames';
import styles from './site-menu.module.scss';

function SiteMenu({isMenuOpen}) {
  return (
    <ul className={cn(styles.list, isMenuOpen && styles.list_menu_open)}>
      <li className={styles.list_item}>
        <Link to="/">
          Услуги
        </Link>
      </li>
      <li className={styles.list_item}>
        <Link to="/">
          Рассчитать кредит
        </Link>
      </li>
      <li className={styles.list_item}>
        <Link to="/">
          Конвертер валют
        </Link>
      </li>
      <li className={styles.list_item}>
        <Link to="/">
          Контакты
        </Link>
      </li>
    </ul>
  );
}

SiteMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};

export default SiteMenu;
