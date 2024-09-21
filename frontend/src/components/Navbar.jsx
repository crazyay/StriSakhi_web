import React, { useState } from 'react';
import styles from '../App.module.css';
import LoginPopup from './LoginPopup';

const Navbar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <a className={styles.navbarLeft} href="/">
          {/* <img src="logo.png" alt="Sakhi Logo" className={styles.navbarLogo} /> */}
          <span className={styles.navbarName}>Sakhi</span>
        </a>
        <div className={styles.navbarRight}>
          <button className={styles.loginButton} onClick={togglePopup}>Login</button>
          <select className={styles.languageSelect}>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
          </select>
        </div>
      </nav>
      <LoginPopup isOpen={isPopupOpen} onClose={togglePopup} />
    </>
  );
};

export default Navbar;
