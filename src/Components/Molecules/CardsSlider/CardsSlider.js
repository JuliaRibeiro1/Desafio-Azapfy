import React from 'react'
import arrow from "../../../Assets/icon-arrow.png"
import styles from "./CardsSlider.module.css"
import { UserContext } from '../../../useContext'

function CardsSlider() {
    const {currentPage,nextPage,previousPage, cardsArr, cardsInOnePage,error} = React.useContext(UserContext)
console.log(error)
    let totalPages = 0

    if(cardsArr) {
        totalPages = Math.ceil(cardsArr.length / cardsInOnePage)
    }

  return (
    error ? "" :
    <div className={`${styles.cardsSlider} center`}> 

        {currentPage > 1 && <button onClick={previousPage} className={styles.rightArrow}><img src={arrow} alt='voltar'/></button>}
            <span>{currentPage} de {totalPages}</span>
        {currentPage < totalPages && <button onClick={nextPage}><img src={arrow} alt='proximo'/></button>}
        </div>
    
  )
}

export default CardsSlider