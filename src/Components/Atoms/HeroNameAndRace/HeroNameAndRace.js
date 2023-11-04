import React from 'react'
import HeroName from '../Text/HeroName/HeroName'
import styles from "./HeroNameAndRace.module.css"
import HeroRace from '../Text/HeroRace/HeroRace'


function HeroNameAndrace({name,description}) {
  return (
    <div className={`${styles.heroNameAndRace} textShadow`}>
        <HeroName>
            {name}
        </HeroName>
        <HeroRace>
            {description}
        </HeroRace>
    </div>
  )
}

export default HeroNameAndrace