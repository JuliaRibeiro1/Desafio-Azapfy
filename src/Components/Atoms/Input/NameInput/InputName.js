import React from 'react'
import styles from "./InputName.module.css"

function InputName() {
  return (
    <input className={`${styles.input} textCenter goldBorder`} type='text' placeholder='Digite seu nome'/>
  )
}

export default InputName