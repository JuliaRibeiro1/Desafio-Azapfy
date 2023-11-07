import React from 'react'
import styles from "./BattlePage.module.css"
import BattleHeros from '../../Molecules/BattleHeros/BattleHeros'
import PowerStats from '../../Molecules/PowerStats/PowerStats'

function BattlePage() {
  return (
    <div className={`${styles.battlePage} center`}>
        <BattleHeros/>
        <PowerStats/>
    </div>
  )
}

export default BattlePage