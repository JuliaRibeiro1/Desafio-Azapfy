import React from 'react'
import styles from "./StartPage.module.css"
import GameTitle from '../../Atoms/Text/GameName/GameTitle'

function StartPage() {
  return (
    <div className={styles.startPage}>
        <GameTitle/>
    </div>
  )
}

export default StartPage