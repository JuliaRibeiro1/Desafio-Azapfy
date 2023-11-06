import React from 'react'
import styles from "./SearchBar.module.css"

import { UserContext } from '../../../useContext'

function SearchBar() {

  const [value, setValue] = React.useState("")
  const {data,  setCardsArr,cardsArr} = React.useContext(UserContext)
 
  function handleChange({target}) {
    setValue(target.value)

  }

React.useEffect(() => {
   if (data) {
    const filterStartsWith = data.filter(e => {
      const name = e.name.toLowerCase();
      const searchValue = value.toLowerCase();
      return name.startsWith(searchValue);
    });
    
    const filterIncludes = data.filter(e => {
      const name = e.name.toLowerCase();
      const searchValue = value.toLowerCase();
      return name.includes(searchValue) && !name.startsWith(searchValue);
    });

    const result = filterStartsWith.concat(filterIncludes);
    setCardsArr(result);
  }
}, [value]);

  
    return (
        <div className={styles.searchBar}>
            <input value={value} placeholder='Digite o nome do herói' onChange={({target}) => handleChange({target})}/>
        </div>
    )

}

export default SearchBar 