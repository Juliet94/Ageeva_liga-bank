import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

import styles from './popup.module.scss';

function Popup({isPopupOpen, setIsPopupOpen}) {
  const onCloseButtonClick = () => {
    setIsPopupOpen(false);
    document.body.style = 'overflow: visible;';
  };

  return (
    <ReactModal
      className={styles.modal}
      overlayClassName={styles.overlay}
      isOpen={isPopupOpen}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      onRequestClose={() => setIsPopupOpen(false)}
      ariaHideApp={false}
    >
      <button
        className={styles.button}
        type="button"
        onClick={onCloseButtonClick}
      />
      <p className={styles.text_title}>
        Спасибо за обращение в наш банк
      </p>
      <p className={styles.text_description}>
        Наш менеджер скоро свяжется с вами по указанному номеру телефона
      </p>
    </ReactModal>
  );
}

Popup.propTypes = {
  isPopupOpen: PropTypes.bool.isRequired,
  setIsPopupOpen: PropTypes.func.isRequired,
};

export default Popup;
