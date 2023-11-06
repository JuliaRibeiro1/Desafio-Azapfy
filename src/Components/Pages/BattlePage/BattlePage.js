import React from 'react'
import styles from "./BattlePage.module.css"
import BattleHeros from '../../Molecules/BattleHeros/BattleHeros'

function BattlePage() {
  return (
    <div className={`${styles.battlePage} center`}>
        <BattleHeros/>
    </div>
  )
}

export default BattlePage