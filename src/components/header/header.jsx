import React, {useState, useEffect} from 'react';
import styles from './header.module.scss';
import cn from 'classnames';

import Logo from '../logo/logo';
import SiteMenu from '../site-menu/site-menu';
import Login from '../login/login';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen || isModalOpen) {
      document.body.style = 'overflow: hidden;';
    }

    if (!isMenuOpen && !isModalOpen) {
      document.body.style = 'overflow: visible;';
    }
  }, [isMenuOpen, isModalOpen]);

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
          <a
            className={cn(styles.link, isMenuOpen && styles.link_menu_open)}
            href="/"
            onClick={(evt) => {
              evt.preventDefault();
              setIsModalOpen(true);
            }}
          >
            Войти в Интернет-банк
          </a>
          <button
            className={cn(styles.button_close, isMenuOpen && styles.button_close_menu_open)}
            type="button"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
        {isModalOpen && <Login isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
      </div>
    </header>
  );
}

export default Header;
