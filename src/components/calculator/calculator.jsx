import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import cn from 'classnames';

import Range from '../range/range';
import Checkbox from '../checkbox/checkbox';
import Offer from '../offer/offer';

import styles from './calculator.module.scss';
import {CreditInfo} from '../../const';

const options = [
  { value: CreditInfo.mortgage.VALUE, label: CreditInfo.mortgage.LABEL },
  { value: CreditInfo.car.VALUE, label: CreditInfo.car.lABEL },
];

const customStyles = {
  option: (provided) => ({
    ...provided,
    borderBottom: '1px solid #c1c2ca',
    padding: 20,
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#1f1e25',
    fontWeight: '500',
  }),
};


function Calculator() {
  const [purpose, setPurpose] = useState('');
  const [price, setPrice] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [rangeDownPayment, setRangeDownPayment] = useState('');
  const [time, setTime] = useState('');
  const [rangeTime, setRangeTime] = useState('');

  const [priceError, setPriceError] = useState(false);

  useEffect(() => {
    if (purpose === CreditInfo.mortgage.VALUE || purpose === CreditInfo.car.VALUE) {
      setPrice(CreditInfo[purpose].PRICE.MIN);
      setDownPayment(CreditInfo[purpose].PRICE.MIN * CreditInfo[purpose].DOWN_PAYMENT.MIN);
      setRangeDownPayment(CreditInfo[purpose].DOWN_PAYMENT.MIN);
      setTime(CreditInfo[purpose].TIME.MIN);
    }
  }, [purpose]);

  const onPriceChange = (evt) => {
    setPrice(evt.target.value);
    setDownPayment(Math.round(evt.target.value * CreditInfo[purpose].DOWN_PAYMENT.MIN));
    setRangeDownPayment(CreditInfo[purpose].DOWN_PAYMENT.MIN);

    if ((evt.target.value < CreditInfo[purpose].PRICE.MIN) || (evt.target.value > CreditInfo[purpose].PRICE.MAX)) {
      setPriceError(true);
    } else {
      setPriceError(false);
    }
  };

  const onPriceBlur = () => {
    setPriceError(false);

    if (price < CreditInfo[purpose].PRICE.MIN) {
      setPrice(CreditInfo[purpose].PRICE.MIN);
      setDownPayment(Math.round(CreditInfo[purpose].PRICE.MIN * CreditInfo[purpose].DOWN_PAYMENT.MIN));
    }
    if (price > CreditInfo[purpose].PRICE.MAX) {
      setPrice(CreditInfo[purpose].PRICE.MAX);
      setDownPayment(Math.round(CreditInfo[purpose].PRICE.MAX * CreditInfo[purpose].DOWN_PAYMENT.MIN));
    }
  };

  const onDownPaymentChange = (evt) => {
    setDownPayment(evt.target.value);
    setRangeDownPayment(evt.target.value / price);
  };

  const onDownPaymentBlur = () => {
    if (downPayment < price * CreditInfo[purpose].DOWN_PAYMENT.MIN) {
      setDownPayment(price * CreditInfo[purpose].DOWN_PAYMENT.MIN);
      setRangeDownPayment(CreditInfo[purpose].DOWN_PAYMENT.MIN);
    }
  };

  const onRangeDownPaymentChange = (evt) => {
    setRangeDownPayment(evt.target.value);
    setDownPayment(Math.round(price * evt.target.value));
  };

  const onTimeChange = (evt) => {
    setTime(evt.target.value);
    setRangeTime(evt.target.value);
  };

  const onTimeBlur = () => {
    if (time < CreditInfo[purpose].TIME.MIN) {
      setTime(CreditInfo[purpose].TIME.MIN);
      setRangeTime(CreditInfo[purpose].TIME.MIN);
    }

    if (time > CreditInfo[purpose].TIME.MAX) {
      setTime(CreditInfo[purpose].TIME.MAX);
      setRangeTime(CreditInfo[purpose].TIME.MAX);
    }
  };

  const onRangeTimeChange = (evt) => {
    setRangeTime(evt.target.value);
    setTime(evt.target.value);
  };

  return (
    <form className={styles.form}>
      <div>
        <div>
          <h3>
            Шаг 1. Цель кредита
          </h3>
          <Select
            value={purpose.value}
            onChange={(value) => setPurpose(value.value)}
            styles={customStyles}
            options={options}
            placeholder="Выберите цель кредита"
          />
        </div>
        {(purpose === CreditInfo.mortgage.VALUE || purpose === CreditInfo.car.VALUE) && (
          <div>
            <div className={styles.wrapper_price}>
              <h3>
                Шаг 2. Введите параметры кредита
              </h3>
              <label className={styles.label}>
                Стоимость {CreditInfo[purpose].PRICE.TITLE}
                {priceError && (
                  <span>Некорректное значение</span>
                )}
                <input
                  className={styles.input}
                  type="text"
                  value={price}
                  onChange={onPriceChange}
                  onBlur={onPriceBlur}
                />
                <button
                  className={cn(styles.price_control_button, styles.price_control_button_minus)}
                  type="button"
                  disabled={+price <= CreditInfo[purpose].PRICE.MIN}
                  onClick={() => {
                    setPrice(price - CreditInfo[purpose].PRICE.STEP);
                    setDownPayment(Math.round((price - CreditInfo[purpose].PRICE.STEP) * CreditInfo[purpose].DOWN_PAYMENT.MIN));
                  }}
                />
                <button
                  className={cn(styles.price_control_button, styles.price_control_button_plus)}
                  type="button"
                  disabled={+price >= CreditInfo[purpose].PRICE.MAX}
                  onClick={() => {
                    setPrice(price + CreditInfo[purpose].PRICE.STEP);
                    setDownPayment(Math.round((price + CreditInfo[purpose].PRICE.STEP) * CreditInfo[purpose].DOWN_PAYMENT.MIN));
                  }}
                />
                <span>
                  От {CreditInfo[purpose].PRICE.MIN} до {CreditInfo[purpose].PRICE.MAX} рублей
                </span>
              </label>
            </div>
            <div>
              <label className={styles.label}>
                Первоначальный взнос
                <input
                  className={styles.input}
                  type="text"
                  value={downPayment}
                  onChange={onDownPaymentChange}
                  onBlur={onDownPaymentBlur}
                />
                <Range
                  value={+rangeDownPayment}
                  onRangeChange={onRangeDownPaymentChange}
                  min={CreditInfo[purpose].DOWN_PAYMENT.MIN}
                  max={CreditInfo[purpose].DOWN_PAYMENT.MAX}
                  step={CreditInfo[purpose].DOWN_PAYMENT.STEP}
                />
              </label>
            </div>
            <div>
              <label className={styles.label}>
                Срок кредитования
                <input
                  className={styles.input}
                  type="text"
                  value={time}
                  onChange={onTimeChange}
                  onBlur={onTimeBlur}
                />
                <Range
                  value={+rangeTime}
                  onRangeChange={onRangeTimeChange}
                  min={CreditInfo[purpose].TIME.MIN}
                  max={CreditInfo[purpose].TIME.MAX}
                  step={CreditInfo[purpose].TIME.STEP}
                  isTime
                />
              </label>
            </div>
            <div>
              <Checkbox />
            </div>
          </div>
        )}
        <Offer />
      </div>
    </form>
  );
}

export default Calculator;
