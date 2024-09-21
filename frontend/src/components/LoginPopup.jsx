import React, { useState } from 'react';
import styles from '../compoCSS/LoginPopup.module.css';

const LoginPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.popupOverlay} onClick={onClose}>
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.popupTitle}>Login</h2>
        <button className={styles.googleButton}>Login with Gmail</button>
        <hr className={styles.divider} />
        <form className={styles.loginForm}>
          <label className={styles.label}>
            Full Name:
            <input type="text" className={styles.input} />
          </label>
          <label className={styles.label}>
            Email or Phone Number:
            <input type="text" className={styles.input} />
          </label>
          <label className={styles.label}>
            Date of Birth:
            <input type="date" className={styles.input} />
          </label>
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
