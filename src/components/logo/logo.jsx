import React from 'react';
import PropTypes from 'prop-types';
import styles from './logo.module.scss';
import cn from 'classnames';
import logo from '../../assets/images/logo.svg';

function Logo({isMenuOpen = false}) {
  return (
    <div className={cn(styles.logo, isMenuOpen && styles.logo_menu_open)}>
      <img src={logo} alt="Логотип Лига-Банк"/>
    </div>
  );
}

Logo.propTypes = {
  isMenuOpen: PropTypes.bool,
};

export default Logo;
