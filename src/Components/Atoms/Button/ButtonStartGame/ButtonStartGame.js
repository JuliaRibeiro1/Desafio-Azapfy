import React from 'react'
import styles from "./ButtonStartGame.module.css"

function ButtonStartGame({children, onClick}) {
  return (
    <button onClick={onClick} className={`${styles.button} goldBorder`}>{children}</button>
  )
}

export default ButtonStartGame