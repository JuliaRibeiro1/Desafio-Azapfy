import React from 'react'
import BattleHeros from '../../../Molecules/BattleHeros/BattleHeros'
import PowerStats from '../../../Molecules/PowerStats/PowerStats'
import styles from "./BattleSection.module.css"
import PowerTotal from '../../../Atoms/PowerTotal/PowerTotal'

function BattleSection() {
  return (
    <div className={`${styles.battleSection} center`}>
        <BattleHeros/>
        <PowerTotal/>
        <PowerStats/>
    </div>
  )
}

export default BattleSection