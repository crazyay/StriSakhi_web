import React from 'react';
import FrontCard from './FrontCard';
import styles from '../compoCSS/FrontCardContainer.module.css';
import ImproveYourLifeData from '../API/ImproveYourLifeData';

const ImproveYourLife = () => {
  return (
    <div className={styles.cardContainer}>
      {ImproveYourLifeData.map((card, index) => (
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

export default ImproveYourLife;
