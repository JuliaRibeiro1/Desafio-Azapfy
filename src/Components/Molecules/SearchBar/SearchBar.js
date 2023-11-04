import React from 'react'
import InputName from '../../Atoms/Input/NameInput/InputName'
import styles from "./SearchBar.module.css"
import useForm from '../../../Hooks/useForm'

function SearchBar() {
  
    const {value} = useForm()
  
    return (
        <div className={styles.searchBar}>
            <InputName value={value}/>
        </div>
    )

}

export default SearchBar