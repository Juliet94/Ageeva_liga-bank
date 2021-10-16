import React, {useState, useEffect} from 'react';
import styles from './header.module.scss';
import cn from 'classnames';

import Logo from '../logo/logo';
import SiteMenu from '../site-menu/site-menu';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style = 'overflow: hidden;';
    }

    if (!isMenuOpen) {
      document.body.style = 'overflow: visible;';
    }
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={cn(styles.wrapper, isMenuOpen && styles.wrapper_menu_open)}>
        <button
          className={styles.button_menu}
          type="button"
          onClick={() => setIsMenuOpen(true)}
        />
        <Logo isMenuOpen={isMenuOpen} />
        <nav className={cn(styles.nav, isMenuOpen && styles.nav_menu_open)}>
          <SiteMenu isMenuOpen={isMenuOpen}/>
        </nav>
        <div className={cn(styles.button_wrapper, isMenuOpen && styles.button_wrapper_menu_open)}>
          <a className={cn(styles.link, isMenuOpen && styles.link_menu_open)} href="/">
            Войти в Интернет-банк
          </a>
          <button
            className={cn(styles.button_close, isMenuOpen && styles.button_close_menu_open)}
            type="button"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
