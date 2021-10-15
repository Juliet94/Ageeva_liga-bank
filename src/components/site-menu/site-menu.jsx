import React from 'react';
import {Link} from 'react-router-dom';
import styles from './site-menu.module.scss';

function SiteMenu() {
  return (
    <ul>
      <li>
        <Link to="/">
          Услуги
        </Link>
      </li>
      <li>
        <Link to="/">
          Рассчитать кредит
        </Link>
      </li>
      <li>
        <Link to="/">
          Конвертер валют
        </Link>
      </li>
      <li>
        <Link to="/">
          Контакты
        </Link>
      </li>
    </ul>
  );
}

export default SiteMenu;
