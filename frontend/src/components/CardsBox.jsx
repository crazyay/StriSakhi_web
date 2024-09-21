import React from 'react'
import Homecard from './Homecard'
import styles from "../compoCSS/cardsBox.module.css"
import cardDataArray from '../API/CardData'

function CardsBox() {
  return (
    <>
    <div className={styles.heading}>
        <h1>Resources for Every Stage of Life</h1>
    </div>
    <div className={styles.cardsBox}>

        {cardDataArray.map((card, index) => (
        <Homecard 
          key={index}
          title={card.title}
          imageUrl={card.imageUrl}
          description={card.description}
          linkUrl={card.linkUrl}
        />
        ))}

      </div>
    </>
  )
}

export default CardsBox