import React from 'react'
import arrow from "../../../Assets/icon-arrow.png"
import styles from "./CardsSlider.module.css"
import { UserContext } from '../../../useContext'

function CardsSlider() {
    const {currentCards,setCurrentCards} = React.useContext(UserContext)

    function nextCards() {
        console.log("OIII")
        setCurrentCards(prev => prev + 1)
    }

  return (
    <div className={styles.cardsSlider}> 
        <button className={styles.rightArrow}><img src={arrow} alt='voltar'/></button>
            <span>{currentCards} de </span>
        <button onClick={nextCards}><img src={arrow} alt='proximo'/></button>
    </div>
  )
}

export default CardsSlider