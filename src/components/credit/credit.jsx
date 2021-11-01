import React, {useState} from 'react';
import styles from './credit.module.scss';

import Calculator from '../calculator/calculator';
import Application from '../application/application';
import Popup from '../popup/popup';

function Credit() {
  const [creditData, setCreditData] = useState({
    purpose: '',
    price: '',
    downPayment: '',
    time: '',
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section className={styles.section} id="credit" >
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>
          Кредитный калькулятор
        </h2>
        <Calculator setCreditData={setCreditData} />
        {creditData.purpose && <Application creditData={creditData} setCreditData={setCreditData} setIsPopupOpen={setIsPopupOpen} />}
        {isPopupOpen && <Popup isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />}
      </div>
    </section>
  );
}

export default Credit;
