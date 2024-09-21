import React from 'react';
import styles from '../compoCSS/footer.module.css'; 
import { FaTwitter, FaYoutube, FaFacebook, FaLinkedin, FaInstagram, FaGooglePlay } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
            <div className={styles.footerLeftSide}>
            <p className={styles.lable} >Follow Sakhi</p>
            <div className={styles.socialLinks}>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
                </a>
            </div>
        </div>
            <div className={styles.aboutTermConditions}>
                <a href="">About</a>
                <a href="">Terms and Conditions of use</a>
            </div>
        <div className={styles.footerRightSide}>
            <p className={styles.lable}>Get The Sakhi App</p>
            <div className={styles.downloadLink}>

                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" aria-label="Google Play Store">
                <img src="Google_Play_Store_badge_EN.svg" alt="" />
                </a>

                <a href="https://www.apple.com/in/app-store/" target="_blank" rel="noopener noreferrer" aria-label="Google Play Store">
                <img src="App_Store_Badge_EN.svg" alt="" />
                </a>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
