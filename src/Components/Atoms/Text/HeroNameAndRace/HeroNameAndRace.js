import React from 'react'
import HeroName from '../HeroName/HeroName'
import styles from "./HeroNameAndRace.module.css"
import HeroRace from '../HeroRace/HeroRace'


function HeroNameAndrace({name,description}) {
  return (
    <div className={`${styles.heroNameAndRaceContainer} textShadow`}>
      <div className={styles.heroNameAndRace}>
        <HeroName>
            {name}
        </HeroName>
        <HeroRace>
            {description}
        </HeroRace>
        </div>
    </div>
  )
}

export default HeroNameAndrace