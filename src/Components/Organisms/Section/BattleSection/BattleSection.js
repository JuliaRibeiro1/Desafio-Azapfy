import React from 'react'
import BattleHeros from '../../../Molecules/BattleHeros/BattleHeros'
import PowerStats from '../../../Molecules/PowerStats/PowerStats'
import styles from "./Battle.module.css"

function BattleSection() {
  return (
    <div className={`${styles.battleSection} center`}>
        <BattleHeros/>
        <PowerStats/>
    </div>
  )
}

export default BattleSection