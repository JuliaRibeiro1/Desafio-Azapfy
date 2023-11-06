import React from 'react'
import styles from "./SearchBar.module.css"

import { UserContext } from '../../../useContext'

function SearchBar() {

  const [value, setValue] = React.useState("")
  const {data,  setCardsArr,cardsArr} = React.useContext(UserContext)
  function handleChange({target}) {
    setValue(target.value)
  
   const filterArr = data.filter(e => e.name.includes(value))
   
   setCardsArr(filterArr)
   console.log(cardsArr)
    
  }
    return (
        <div className={styles.searchBar}>
            <input value={value} placeholder='Digite o nome do herói' onChange={handleChange}/>
        </div>
    )

}

export default SearchBar 