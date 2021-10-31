import React, {useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import cn from 'classnames';
import styles from './login.module.scss';
import {useLocalStorage} from '../../hooks/useLocalStorage';
import logo from '../../assets/images/logo-modal.svg';

const ModalInput = {
  LOGIN: 'login',
  PASSWORD: 'password',
};

function Login({isModalOpen, setIsModalOpen}) {
  const [login, setLogin] = useLocalStorage(ModalInput.LOGIN, '');
  const [password, setPassword] = useLocalStorage(ModalInput.PASSWORD, '');
  const [buttonShowPressed, setButtonShowPressed] = useState(false);

  const loginRef = useRef('');

  const onSubmitButtonClick = (evt) => {
    evt.preventDefault();
    setIsModalOpen(false);
    localStorage.clear();
  };

  return (
    <ReactModal
      className={styles.modal}
      overlayClassName={styles.overlay}
      isOpen={isModalOpen}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      onRequestClose={() => setIsModalOpen(false)}
      onAfterOpen={() => loginRef.current.focus()}
      ariaHideApp={false}
    >
      <div className={styles.wrapper}>
        <div className={styles.inner_wrapper}>
          <img className={styles.logo} src={logo} alt="Логотип Лига-Банк"/>
          <button
            className={styles.button_close}
            type="button"
            onClick={() => setIsModalOpen(false)}
          />
        </div>
        <form className={styles.form}>
          <label className={styles.label}>
            Логин
            <input
              className={styles.input}
              type="text"
              value={login}
              ref={loginRef}
              onChange={(evt) => setLogin(evt.target.value)}
            />
          </label>
          <label className={cn(styles.label, styles.label_password)}>
            Пароль
            <input
              className={styles.input}
              type={buttonShowPressed ? 'text' : 'password'}
              value={password}
              onChange={(evt) => setPassword(evt.target.value)}
            />
          </label>
          <button
            className={styles.button_show_password}
            type="button"
            onMouseDown={() => setButtonShowPressed(true)}
            onMouseUp={() => setButtonShowPressed(false)}
            onMouseLeave={() => setButtonShowPressed(false)}
          />
          <Link className={styles.link} to="/">
            Забыли пароль?
          </Link>
          <button
            className={styles.button_submit}
            type="submit"
            onClick={onSubmitButtonClick}
          >
            Войти
          </button>
        </form>
      </div>
    </ReactModal>
  );
}

Login.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};

export default Login;
