import React from 'react';
import {Link} from 'react-router-dom';
import styles from './logo.module.scss';

function Logo() {
  return (
    <Link className={styles.logo} to="/">
      <img />
    </Link>
  );
}

export default Logo;
