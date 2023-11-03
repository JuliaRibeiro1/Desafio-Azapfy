import React from 'react'
import styles from "./CardsPage.module.css"
import CardsSection from '../../Organisms/Section/CardsSection/CardsSection'
function CardsPage() {
  return (
    <div className={styles.cardsPage}>
      <CardsSection/>
    </div>
  )
}

export default CardsPage