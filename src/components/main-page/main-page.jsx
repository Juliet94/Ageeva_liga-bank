import React from 'react';
import styles from './main-page.module.scss';

import Header from '../header/header';
import Slider from '../slider/slider';
import Services from '../services/services';
import Credit from '../credit/credit';
import Map from '../map/map';
import Footer from '../footer/footer';

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <h1 className="visually-hidden">
          Кредитный калькулятор Лига Банка
        </h1>
        <Slider />
        <Services />
        <Credit />
        <Map />
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
