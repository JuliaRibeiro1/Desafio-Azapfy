import React from 'react'
import arrow from "../../../Assets/icon-arrow.png"
import styles from "./CardsSlider.module.css"

function CardsSlider({current,total}) {
  return (
    <div className={styles.cardsSlider}> 
        <button className={styles.rightArrow}><img src={arrow} alt='voltar'/></button>
            <span>{current} de {total}</span>
        <button><img src={arrow} alt='proximo'/></button>
    </div>
  )
}

export default CardsSlider