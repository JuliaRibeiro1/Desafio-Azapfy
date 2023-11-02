import React from 'react'
import styles from "./StartPage.module.css"

import StartPageMain from '../../Organisms/Main/StartPageMain/StartPageMain'

function StartPage() {
  return (
    <div className={`${styles.startPage} center`}>
        <StartPageMain/>
    </div>
  )
}

export default StartPage