import React from 'react';
import PropTypes from 'prop-types';
import styles from '../compoCSS/HomeCard.module.css'; 
import { FaArrowAltCircleRight } from "react-icons/fa";

const Homecard = ({ title, imageUrl, description, linkUrl }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardHead}>
        <p>{title}</p>
      </div>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <img src={imageUrl} alt={title} />
        </div>
        <div className={styles.cardText}>
          <p>{description}</p>
          <a href={linkUrl} className={styles.cardButton}>
            More
            <FaArrowAltCircleRight />
          </a>
        </div>
      </div>
    </div>
  );
};

// Homecard.propTypes = {
//   title: PropTypes.string.isRequired,
//   imageUrl: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   linkUrl: PropTypes.string.isRequired,
// };

export default Homecard;
