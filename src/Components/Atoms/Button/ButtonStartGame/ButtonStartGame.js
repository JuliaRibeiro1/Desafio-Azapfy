import React from 'react'
import styles from "./ButtonStartGame.module.css"

function ButtonStartGame() {
  return (
    <button className={`${styles.button} goldBorder`}>Jogar</button>
  )
}

export default ButtonStartGame