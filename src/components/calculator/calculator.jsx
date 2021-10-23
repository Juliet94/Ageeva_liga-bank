import React, {useState} from 'react';

import Rnage from '../range/range';
import Checkbox from '../checkbox/checkbox';
import Offer from '../offer/offer';

function Calculator() {
  const [purpose, setPurpose] = useState('');

  return (
    <form>
      <div>
        <div>
          <h3>
            Шаг 1. Цель кредита
          </h3>
          <select>
            <option> Ипотечное кредитование </option>
            <option> Автомобильное кредитование </option>
          </select>
        </div>
        <div>
          <h3>
            Шаг 2. Введите параметры кредита
          </h3>
          <label>
            Стоимость недвижимости
            <input />
            <button type="button" />
            <button type="button" />
            <span>
              От 1 200 000 до 25 000 000 рублей
            </span>
        </div>
        <div>
          <label>
            Первоначальный взнос
            <input />
            <Range />
          </label>
        </div>
        <div>
          <label>
            Срок кредитования
            <input />
            <Range />
          <label>
        </div>
        <div>
          <Checkbox />
        </div>
      </div>
      <Offer />
    </form>
  );
}

export default Calculator;
