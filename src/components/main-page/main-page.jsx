import React from 'react';
import styles from './main-page.module.scss';

import Header from '../header/header';
import Slider from '../slider/slider';

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <h1 className="visually-hidden">
          Кредитный калькулятор Лига Банка
        </h1>
        <Slider />
      </main>
    </div>
  );
}

export default MainPage;
