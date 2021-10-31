import React, {useState} from 'react';
import styles from './credit.module.scss';

import Calculator from '../calculator/calculator';
import Application from '../application/application';

function Credit() {
  const [creditData, setCreditData] = useState({
    purpose: '',
    price: '',
    downPayment: '',
    time: '',
  });

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>
          Кредитный калькулятор
        </h2>
        <Calculator setCreditData={setCreditData} />
        {creditData.purpose && <Application creditData={creditData} setCreditData={setCreditData} />}
      </div>
    </section>
  );
}

export default Credit;
