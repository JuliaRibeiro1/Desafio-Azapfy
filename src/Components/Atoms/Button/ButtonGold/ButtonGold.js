import React from 'react'
import styles from "./ButtonGold.module.css"

function ButtonGold({children, onClick}) {
  return (
    <div className={styles.buttonGold} onClick={onClick}>{children}</div>
  )
}

export default ButtonGold