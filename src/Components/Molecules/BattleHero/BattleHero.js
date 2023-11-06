import React from 'react'
import styles from "./Battlehero.module.css"

function BattleHero({name,image}) {
  return (
    <div className={`${styles.battleHero} textShadow`}>
        <h3>{name}</h3>
        <img src={image} className='boxShadow'/>
    </div>
  )
}

export default BattleHero