import React, {useState} from 'react';
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
    <section>
      <div>
        <h2>
          Кредитный калькулятор
        </h2>
        <Calculator setCreditData={setCreditData} />
        <Application creditData={creditData} />
      </div>
    </section>
  );
}

export default Credit;