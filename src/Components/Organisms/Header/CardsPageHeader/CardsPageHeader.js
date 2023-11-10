import React from 'react'
import ButtonHeader from '../../../Atoms/Button/ButtonHeader/ButtonHeader'
import SearchBar from '../../../Molecules/SearchBar/SearchBar'
import styles from "./CardsPageHeader.module.css"
import User from '../../../Molecules/User/User'

function CardsPageHeader() {
  return (
    <header className={styles.cardsPageHeader}>
  
        <User/>

        <SearchBar/> 

    
    </header>
  )
}

export default CardsPageHeader