import React from 'react'
import styles from "./GameTitle.module.css"

function GameTitle() {
  return (
    <h1 className={`${styles.title} textShadow goldText`}>SUPERHERO CLASH</h1>
  )
}

export default GameTitle