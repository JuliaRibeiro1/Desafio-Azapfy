import React from 'react'
import styles from "./HeroName.module.css"

function HeroName({children}) {
  return (
    <h2 className={styles.heroName}>{children}</h2>
  )
}

export default HeroName