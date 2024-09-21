import React from 'react';
import FrontCard from './FrontCard';
import styles from '../compoCSS/FrontCardContainer.module.css';
import FrontCardData from '../API/FrontCardData';

const FrontCardContainer = () => {
  return (
    <div className={styles.cardContainer}>
      {FrontCardData.map((card, index) => (
        <FrontCard
          key={index}
          imageSrc={card.imageSrc}
          altText={card.altText}
          description={card.description}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default FrontCardContainer;
