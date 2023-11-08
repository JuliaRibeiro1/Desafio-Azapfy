import React from 'react'
import styles from "./BattlePage.module.css"
import BattleSection from '../../Organisms/Section/BattleSection/BattleSection'

function BattlePage() {
  return (
    <div className={`${styles.battlePage} center`}>
        <BattleSection/>
    </div>
  )
}

export default BattlePage