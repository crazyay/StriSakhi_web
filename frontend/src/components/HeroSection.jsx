import React, { useState } from 'react';
import styles from '../compoCSS/HeroSection.module.css';

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.heroSection}>
      <div className={styles.leftSide}>
        {/* <h1 className={styles.heroText}>
          Your health is your capital
        </h1> */}
        <i className={styles.subtitle}>Don't suffer in silence, let's talk about it!</i>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </div>
        <ul className={`${styles.linkList} ${isMenuOpen ? styles.showMenu : ''}`}>
          <li className={styles.linkItem}>
            <a href="/health-gyaan" className={styles.link}>
              Health
            </a>
          </li>
          <li className={styles.linkItem}>
            <a href="/improve-your-lifestyle" className={styles.link}>
              Lifestyle
            </a>
          </li>
          <li className={styles.linkItem}>
            <a href="#monitor-your-health" className={styles.link}>
              Monitoring Health
            </a>
          </li>
          <li className={styles.linkItem}>
            <a href="/health-reminders" className={styles.link}>
              Consultation
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeroSection;
