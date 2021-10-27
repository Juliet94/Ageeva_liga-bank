import React, {useState, useEffect} from 'react';
import cn from 'classnames';

import Select from '../select/select';
import Range from '../range/range';
import Checkbox from '../checkbox/checkbox';
import Offer from '../offer/offer';

import styles from './calculator.module.scss';
import {CreditInfo} from '../../const';
import {getSpaces, getMoneyString, getYearString, getNumber} from '../../utils';

function Calculator() {
  const [purpose, setPurpose] = useState('');
  const [price, setPrice] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [rangeDownPayment, setRangeDownPayment] = useState('');
  const [time, setTime] = useState('');
  const [rangeTime, setRangeTime] = useState('');

  const [maternalCapital, setMaternalCapital] = useState(false);
  const [lifeInsurance, setLifeInsurance] = useState(false);
  const [carInsurance, setCarInsurance] = useState(false);

  const [priceError, setPriceError] = useState(false);

  useEffect(() => {
    if (purpose === CreditInfo.mortgage.VALUE || purpose === CreditInfo.car.VALUE) {
      setPrice(getMoneyString(CreditInfo[purpose].PRICE.MIN));
      setDownPayment(getMoneyString(CreditInfo[purpose].PRICE.MIN * CreditInfo[purpose].DOWN_PAYMENT.MIN));
      setRangeDownPayment(CreditInfo[purpose].DOWN_PAYMENT.MIN);
      setTime(getYearString(CreditInfo[purpose].TIME.MIN));
      setRangeTime(CreditInfo[purpose].TIME.MIN);
    }
  }, [purpose]);

  const onPriceChange = (evt) => {
    setPrice(evt.target.value);
    setDownPayment(getMoneyString(Math.round(evt.target.value * CreditInfo[purpose].DOWN_PAYMENT.MIN)));
    setRangeDownPayment(CreditInfo[purpose].DOWN_PAYMENT.MIN);

    if ((evt.target.value < CreditInfo[purpose].PRICE.MIN) || (evt.target.value > CreditInfo[purpose].PRICE.MAX)) {
      setPriceError(true);
    } else {
      setPriceError(false);
    }
  };

  const onPriceFocus = (evt) => {
    setPrice(getNumber(evt.target.value));
  };

  const onPriceBlur = () => {
    setPriceError(false);

    if (price < CreditInfo[purpose].PRICE.MIN) {
      setPrice(getMoneyString(CreditInfo[purpose].PRICE.MIN));
      setDownPayment(getMoneyString(Math.round(CreditInfo[purpose].PRICE.MIN * CreditInfo[purpose].DOWN_PAYMENT.MIN)));
    } else if (getNumber(price) > CreditInfo[purpose].PRICE.MAX) {
      setPrice(getMoneyString(CreditInfo[purpose].PRICE.MAX));
      setDownPayment(getMoneyString(Math.round(CreditInfo[purpose].PRICE.MAX * CreditInfo[purpose].DOWN_PAYMENT.MIN)));
    } else {
      setPrice(getMoneyString(price));
      // setDownPayment(getMoneyString(downPayment));
    }
  };

  const onDownPaymentChange = (evt) => {
    setDownPayment(evt.target.value);
    setRangeDownPayment(evt.target.value / getNumber(price));
  };

  const onDownPaymentBlur = (evt) => {

    if (getNumber(downPayment) < getNumber(price) * CreditInfo[purpose].DOWN_PAYMENT.MIN) {
      setDownPayment(getMoneyString(getNumber(price) * CreditInfo[purpose].DOWN_PAYMENT.MIN));
      setRangeDownPayment(CreditInfo[purpose].DOWN_PAYMENT.MIN);
    } else {
      setDownPayment(getMoneyString(evt.target.value));
    }
  };

  const onDownPaymentFocus = (evt) => {
    setDownPayment(getNumber(evt.target.value));
  };

  const onRangeDownPaymentChange = (evt) => {
    setRangeDownPayment(evt.target.value);
    setDownPayment(getMoneyString(Math.round(getNumber(price) * evt.target.value)));
  };

  const onTimeChange = (evt) => {
    setTime(evt.target.value);
    setRangeTime(evt.target.value);
  };

  const onTimeBlur = () => {
    if (time < CreditInfo[purpose].TIME.MIN) {
      setTime(getYearString(CreditInfo[purpose].TIME.MIN));
      setRangeTime(CreditInfo[purpose].TIME.MIN);
    } else if (time > CreditInfo[purpose].TIME.MAX) {
      setTime(getYearString(CreditInfo[purpose].TIME.MAX));
      setRangeTime(CreditInfo[purpose].TIME.MAX);
    } else {
      setTime(getYearString(time));
    }
  };

  const onTimeFocus = (evt) => {
    setTime(getNumber(evt.target.value));
  };

  const onRangeTimeChange = (evt) => {
    setRangeTime(evt.target.value);
    setTime(getYearString(evt.target.value));
  };

  return (
    <form className={styles.form}>
      <div className={styles.wrapper}>
        <div className={styles.wrapper_select}>
          <h3 className={styles.heading}>
            Шаг 1. Цель кредита
          </h3>
          <Select
            purpose={purpose}
            setPurpose={setPurpose}
          />
        </div>
        {(purpose === CreditInfo.mortgage.VALUE || purpose === CreditInfo.car.VALUE) && (
          <div className={styles.wrapper_parameters}>
            <div className={styles.wrapper_price}>
              <h3 className={styles.heading}>
                Шаг 2. Введите параметры кредита
              </h3>
              <label className={styles.label}>
                <span className={styles.label_text}> Стоимость {CreditInfo[purpose].PRICE.TITLE} </span>
                {priceError && (
                  <span className={styles.error} >Некорректное значение</span>
                )}
                <input
                  className={cn(styles.input, priceError && styles.input_error)}
                  type="text"
                  value={price}
                  onChange={onPriceChange}
                  onBlur={onPriceBlur}
                  onFocus={onPriceFocus}
                />
                <button
                  className={cn(styles.price_control_button, styles.price_control_button_minus)}
                  type="button"
                  disabled={getNumber(price) <= CreditInfo[purpose].PRICE.MIN}
                  onClick={() => {
                    setPrice(getMoneyString(getNumber(price) - CreditInfo[purpose].PRICE.STEP));
                    setDownPayment(getMoneyString(Math.round((getNumber(price) - CreditInfo[purpose].PRICE.STEP) * CreditInfo[purpose].DOWN_PAYMENT.MIN)));
                  }}
                />
                <button
                  className={cn(styles.price_control_button, styles.price_control_button_plus)}
                  type="button"
                  disabled={getNumber(price) >= CreditInfo[purpose].PRICE.MAX}
                  onClick={() => {
                    setPrice(getMoneyString(getNumber(price) + CreditInfo[purpose].PRICE.STEP));
                    setDownPayment(getMoneyString(Math.round((getNumber(price) + CreditInfo[purpose].PRICE.STEP) * CreditInfo[purpose].DOWN_PAYMENT.MIN)));
                  }}
                />
                <span className={styles.price_from}>
                  От {getSpaces(CreditInfo[purpose].PRICE.MIN)}&ensp;до {getMoneyString(CreditInfo[purpose].PRICE.MAX)}
                </span>
              </label>
            </div>
            <div>
              <label className={styles.label}>
                <span className={styles.label_text}> Первоначальный взнос </span>
                <input
                  className={styles.input}
                  type="text"
                  value={downPayment}
                  onChange={onDownPaymentChange}
                  onBlur={onDownPaymentBlur}
                  onFocus={onDownPaymentFocus}
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
                <span className={styles.label_text}> Срок кредитования </span>
                <input
                  className={cn(styles.input, styles.input_year)}
                  type="text"
                  value={time}
                  onChange={onTimeChange}
                  onBlur={onTimeBlur}
                  onFocus={onTimeFocus}
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
            {purpose === CreditInfo.mortgage.VALUE && (
              <div className={styles.wrapper_checkbox}>
                <Checkbox
                  labelText={CreditInfo[purpose].CHECKBOX.CAPITAL}
                  value={maternalCapital}
                  setCheckboxState={setMaternalCapital}
                />
              </div>)}
            {purpose === CreditInfo.car.VALUE && (
              <div className={styles.wrapper_checkbox}>
                <Checkbox
                  labelText={CreditInfo[purpose].CHECKBOX.CAR}
                  value={carInsurance}
                  setCheckboxState={setCarInsurance}
                />
                <Checkbox
                  labelText={CreditInfo[purpose].CHECKBOX.LIFE}
                  value={lifeInsurance}
                  setCheckboxState={setLifeInsurance}
                />
              </div>)}
          </div>
        )}
      </div>
      {(purpose === CreditInfo.mortgage.VALUE || purpose === CreditInfo.car.VALUE) && (
        <Offer
          purpose={purpose}
          price={getNumber(price)}
          downPayment={getNumber(downPayment)}
          time={getNumber(time)}
          maternalCapital={maternalCapital}
          lifeInsurance={lifeInsurance}
          carInsurance={carInsurance}
        />
      )}
    </form>
  );
}

export default Calculator;
