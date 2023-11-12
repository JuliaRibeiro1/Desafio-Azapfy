import React from 'react'
import styles from "./Battlehero.module.css"
import HeroName from '../../Atoms/Text/HeroName/HeroName'
import PowerTotal from '../../Atoms/PowerTotal/PowerTotal'

function BattleHero({name,image,styleImg, index }) {
  
  return (
    <div className={`${styles.battleHero} textShadow ${styleImg? styles.styleImg : ""} ` }>
        <HeroName>{name}</HeroName>
        <img src={image} className='boxShadow'/>
        <PowerTotal index={index}/>
    </div>
  )
}

export default BattleHero