import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

import styles from './application.module.scss';

import {CreditInfo} from '../../const';
import {useLocalStorage} from '../../hooks/useLocalStorage';

const ApplicationInput = {
  NAME: 'name',
  PHONE: 'phone',
  EMAIL: 'email',
};

let applicationNumber = 1;

function Application({creditData, setCreditData, setIsPopupOpen}) {
  const [name, setName] = useLocalStorage(ApplicationInput.NAME, '');
  const [phone, setPhone] = useLocalStorage(ApplicationInput.PHONE, '');
  const [email, setEmail] = useLocalStorage(ApplicationInput.EMAIL, '');

  const nameRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const {
    purpose,
    price,
    downPayment,
    time,
  } = creditData;

  const onFormSubmit = () => {
    if (name && phone && email) {
      setCreditData({
        purpose: '',
        price: '',
        downPayment: '',
        time: '',
      });
      localStorage.clear();
      applicationNumber++;
      setIsPopupOpen(true);
      document.body.style = 'overflow: hidden;';
    }
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>
        Шаг 3. Оформление заявки
      </h3>
      <div className={styles.text_wrapper}>
        <span className={styles.title}>
          Номер заявки
        </span>
        <span className={styles.value}>
          № {applicationNumber.toString().padStart(4, '0')}
        </span>
      </div>
      <div className={styles.text_wrapper}>
        <span className={styles.title}>
          Цель кредита
        </span>
        <span className={styles.value}>
          {CreditInfo[purpose].APPLICATION.PURPOSE_NAME}
        </span>
      </div>
      <div className={styles.text_wrapper}>
        <span className={styles.title}>
          Стоимость {CreditInfo[purpose].APPLICATION.PRICE_NAME}
        </span>
        <span className={styles.value}>
          {price}
        </span>
      </div>
      <div className={styles.text_wrapper}>
        <span className={styles.title}>
          Первоначальный взнос
        </span>
        <span className={styles.value}>
          {downPayment}
        </span>
      </div>
      <div className={styles.text_wrapper}>
        <span className={styles.title}>
          Срок кредитования
        </span>
        <span className={styles.value}>
          {time}
        </span>
      </div>
      <form className={styles.form} onSubmit={onFormSubmit}>
        <div>
          <label>
            <span className="visually-hidden"> Введите ФИО </span>
            <input
              className={styles.input}
              type="text"
              placeholder="ФИО"
              ref={nameRef}
              value={name}
              onChange={(evt) => setName(evt.target.value)}
              required
            />
          </label>
        </div>
        <div className={styles.input_wrapper}>
          <label>
            <span className="visually-hidden"> Введите телефон </span>
            <InputMask
              className={styles.input}
              placeholder="Телефон"
              type="tel"
              value={phone}
              onChange={(evt) => setPhone(evt.target.value)}
              mask="+7 (999) 999-99-99"
              required
            />
          </label>
          <label>
            <span className="visually-hidden"> Введите почту </span>
            <input
              className={styles.input}
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
              required
            />
          </label>
        </div>
        <div className={styles.button_wrapper}>
          <button className={styles.button} type="submit">
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
}

Application.propTypes = {
  creditData: PropTypes.shape({
    purpose: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    downPayment: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
  setCreditData: PropTypes.func.isRequired,
  setIsPopupOpen: PropTypes.func.isRequired,
};

export default Application;
