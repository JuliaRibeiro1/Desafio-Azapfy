import React from 'react'
import arrow from "../../../Assets/icon-arrow.png"
import styles from "./CardsSlider.module.css"
import { UserContext } from '../../../useContext'

function CardsSlider() {
    const {currentPage,setCurrentPage,data,nextPage,previousPage, cardsArr} = React.useContext(UserContext)
    let totalPages = 0
    if(cardsArr) {
        totalPages = Math.ceil(cardsArr.length / 18)
    }
    
    


  return (
    <div className={`${styles.cardsSlider} center`}> 
        {currentPage > 1 && <button onClick={previousPage} className={styles.rightArrow}><img src={arrow} alt='voltar'/></button>}
            <span>{currentPage} de {totalPages}</span>
        {currentPage < totalPages && <button onClick={nextPage}><img src={arrow} alt='proximo'/></button>}
    </div>
  )
}

export default CardsSlider