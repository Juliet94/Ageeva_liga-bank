import React from 'react';
import PropTypes from 'prop-types';

import {CreditInfo} from '../../const';
import {getMoneyString, getYearString} from '../../utils';
import styles from './offer.module.scss';

const MATERNAL_CAPITAL_VALUE = 470000;
const MONTHS_IN_YEAR = 12;
const Rate = {
  MORTGAGE: {
    MIN: 8.50,
    MAX: 9.40,
    DOWN_PAYMENT_RATE: 0.15,
  },
  CAR: {
    MAX: 16,
    MIN: 15,
    EVERY_INSURANCE: 3.5,
    ANY_INSURANCE: 8.5,
    PRICE: 2000000,
  },
};

function Offer({purpose, price, downPayment, time, maternalCapital, lifeInsurance, carInsurance, setCreditData}) {

  const calcSum = () => {
    const sum = price - downPayment;

    if (maternalCapital) {
      return sum - MATERNAL_CAPITAL_VALUE;
    }

    return sum;
  };

  const calcRate = () => {
    const rate = downPayment / price;

    switch (purpose) {
      case CreditInfo.mortgage.VALUE:
        if (rate < Rate.MORTGAGE.DOWN_PAYMENT_RATE) {
          return Rate.MORTGAGE.MAX;
        }
        return Rate.MORTGAGE.MIN;

      case CreditInfo.car.VALUE:
        if (lifeInsurance && carInsurance) {
          return Rate.CAR.EVERY_INSURANCE;
        }
        if (lifeInsurance || carInsurance) {
          return Rate.CAR.ANY_INSURANCE;
        }
        if (price < Rate.CAR.PRICE) {
          return Rate.CAR.MAX;
        }
        if (price >= Rate.CAR.PRICE) {
          return Rate.CAR.MIN;
        }
        break;

      default:
        return 'Неверные данные';
    }
  };

  const calcMonthlyPayment = () => {
    const monthRate = (calcRate() * 0.01) / MONTHS_IN_YEAR;
    const monthQuantity = time * MONTHS_IN_YEAR;

    return Math.round(calcSum(price, downPayment, maternalCapital) * (monthRate + (monthRate / ((1 + monthRate) ** monthQuantity - 1) )));
  };

  const calcMonthlyIncome = () => Math.round(calcMonthlyPayment() * 100 / 45);

  const getRateString = () => {
    const rate = calcRate();

    return rate.toFixed(1).toString().replace(/\./g,',').padEnd(4, '0');
  };

  const onSubmitButtonClick = (evt) => {
    evt.preventDefault();
    setCreditData({
      purpose: purpose,
      price: getMoneyString(price),
      downPayment: getMoneyString(downPayment),
      time: getYearString(time),
    });
  };

  return(
    <div className={styles.wrapper}>
      {calcSum() < CreditInfo[purpose].MIN_CREDIT_SUM ?
        <div className={styles.error_wrapper}>
          <p className={styles.text_error}>
            Наш банк не выдаёт {CreditInfo[purpose].ERROR_TITLE} кредиты меньше {getMoneyString(CreditInfo[purpose].MIN_CREDIT_SUM)}.
          </p>
          <p className={styles.text_hint}>
            Попробуйте использовать другие<br /> параметры для расчёта.
          </p>
        </div> :
        <div>
          <h3 className={styles.heading}>
            Наше предложение
          </h3>
          <div className={styles.inner_wrapper}>
            <div className={styles.span_wrapper}>
              <span className={styles.value}>
                {getMoneyString(calcSum())}
              </span>
              <span className={styles.label}>
              Сумма {CreditInfo[purpose].OFFER_TITLE}
              </span>
            </div>
            <div className={styles.span_wrapper}>
              <span className={styles.value}>
                {getRateString()}%
              </span>
              <span className={styles.label}>
              Процентная ставка
              </span>
            </div>
            <div className={styles.span_wrapper}>
              <span className={styles.value}>
                {getMoneyString(calcMonthlyPayment())}
              </span>
              <span className={styles.label}>
              Ежемесячный платеж
              </span>
            </div>
            <div className={styles.span_wrapper}>
              <span className={styles.value}>
                {getMoneyString(calcMonthlyIncome())}
              </span>
              <span className={styles.label}>
              Необходимый доход
              </span>
            </div>
          </div>
          <button
            className={styles.button}
            type="submit"
            onClick={onSubmitButtonClick}
          >
            Оформить заявку
          </button>
        </div>}
    </div>
  );
}

Offer.propTypes = {
  purpose: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  downPayment: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  maternalCapital: PropTypes.bool,
  lifeInsurance: PropTypes.bool,
  carInsurance: PropTypes.bool,
  setCreditData: PropTypes.func.isRequired,
};

export default Offer;
