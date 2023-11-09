import React from 'react'
import { UserContext } from '../../../useContext'
import styles from "./BattleHeros.module.css"
import BattleHero from '../BattleHero/BattleHero'

function BattleHeros() {
    const {heroBattleArr} = React.useContext(UserContext)
    if(!heroBattleArr[0]) {
      console.log("OIIAAA")
    }
  return (
    <div className={styles.battleHeros}>
        <BattleHero name={heroBattleArr[0].name} image={heroBattleArr[0].images.md}/>
        <span className='goldText'>Vs</span>
        <BattleHero name={heroBattleArr[1].name} image={heroBattleArr[1].images.md}/>
    </div>
  )
}

export default BattleHeros