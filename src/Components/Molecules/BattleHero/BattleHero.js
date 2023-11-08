import React from 'react'
import styles from "./Battlehero.module.css"
import HeroName from '../../Atoms/Text/HeroName/HeroName'

function BattleHero({name,image}) {
  return (
    <div className={`${styles.battleHero} textShadow`}>
        <HeroName>{name}</HeroName>
        <img src={image} className='boxShadow'/>
    </div>
  )
}

export default BattleHero