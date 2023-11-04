import React from 'react'
import styles from "./ButtonHeader.module.css"

function ButtonHeader({children}) {
  return (
    <button className={styles.buttonHeader}>{children}</button>
  )
}

export default ButtonHeader