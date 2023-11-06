import React from 'react'
import styles from "./InputName.module.css"
import Error from '../../Text/Error/Error'

function InputName({value, onChange, onBlur,error}) {
  return (
    <div className={styles.inputContainer}>
      <input className={`${styles.input} textCenter`} type='text' placeholder='Digite seu nome' value={value} onChange={onChange} onBlur={onBlur}/>
      {error && <Error>{error}</Error>}
    </div>
  )
}

export default InputName