import 'React' from react;
import {Link} form 'react-router-dom';
import styles from '.header.module.scss';

import Logo from '../logo/logo';
import SiteMenu from '../site-menu/site-menu';

function Header() {
  return (
  <header className={styles.header}>
    <div className={styles.wrapper}>
      <Logo />
      <nav className={styles.nav}>
        <SiteMenu />
      </nav>
      <div className={styles.login}>
        <Link className={styles.link} to="/">
          Войти в Интернет-банк
        </Link>
      </div
    </div>
  </header>
  );
}

export default Header;
