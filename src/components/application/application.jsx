import React, {useState, useEffect, useRef,} from 'react';
import PropTypes from 'prop-types';

import styles from './application.module.scss';

import {CreditInfo} from '../../const';
import {useLocalStorage} from '../../hooks/useLocalStorage';

const ApplicationInput = {
  NAME: 'name',
  PHONE: 'phone',
  EMAIL: 'email',
};

function Application({creditData, setCreditData}) {
  const [name, setName] = useLocalStorage(ApplicationInput.NAME, '');
  const [phone, setPhone] = useLocalStrage(ApplicationInput.PHONE, '');
  const [email, setEmail] = useLocalStorage(ApplicationInput.EMAIL, '');
  
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
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

  let applicationNumber = 1;
  
  const onSubmitButtonClick = () => {
    if (name && phone && email) {
      setCreditData({
        purpose: '',
        price: '',
        downPayment: '',
        time: '',
      });
      localStorage.clear();
      applicationNumber++
      setIsPopupOpen(true);
      document.body.style = 'overflow: hidden;';
    }
  }

  return (
    <div className={styles.wrapper}>
      <h3>
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
      <form>
        <div>
          <label>
            <input
              className={styles.input}
              type="text"
              placeholder="ФИО"
              ref={nameRef}
              value={name}
              onChange={(evt) => setName(evt.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              className={styles.input}
              placeholder="Телефон"
              value={phone}
              onChange={(evt) => setPhone(evt.target.value)}
            />
          </label>
          <label>
            <input
              className={styles.input}
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
            />
          </label>
        </div>
        <button
          className={styles.button}
          type="submit"
          onClick={onSubmitButtonClick}
        >
          Отправить
        </button>
      </form>
      {isPopupOpen && <Popup isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />}
    </div>
  );
}

Application.propTypes = {
  creditData: PropTypes.shapeOf({
    purpose: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    downPayment: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
  setCreditData: PropTypes.func.isRequired,
};

export default Application;
