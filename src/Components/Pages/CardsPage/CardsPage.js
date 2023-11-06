import React from 'react'
import styles from "./CardsPage.module.css"
import CardsSection from '../../Organisms/Section/CardsSection/CardsSection'
import CardsPageHeader from '../../Organisms/Header/CardsPageHeader/CardsPageHeader'
import CardsPageFooter from '../../Organisms/Footer/CardsPageFooter/CardsPageFooter'

function CardsPage() {
  return (
    <div className={styles.cardsPage}>
      <CardsPageHeader/>
      <CardsSection/>
      <CardsPageFooter/>
    </div>
  )
}

export default CardsPage