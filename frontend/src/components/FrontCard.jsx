import React from 'react';
import PropTypes from 'prop-types'; // For type-checking
import styles from '../compoCSS/FrontCard.module.css';

const FrontCard = ({ imageSrc, altText, description, link }) => {
  return (
    <a href={link} className={styles.card} target="_blank" rel="noopener noreferrer">
      <div className={styles.cardImage}>
        <img src={imageSrc} alt={altText} />
      </div>
      <div className={styles.cardText}>
        <p>{description}</p>
      </div>
    </a>
  );
};

FrontCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FrontCard;
