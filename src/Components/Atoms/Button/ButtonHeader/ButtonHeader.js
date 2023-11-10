import React from 'react'
import styles from "./ButtonHeader.module.css"

function ButtonHeader({children, onClick}) {
  return (
    <button onClick={onClick} className={styles.buttonHeader}>{children}</button>
  )
}

export default ButtonHeader