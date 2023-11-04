import React from 'react'
import styles from "./Card.module.css"
import HeroNameAndRace from '../../Atoms/HeroNameAndRace/HeroNameAndRace'

function Card({name,appearance,images}) {
    console.log(name)
    console.log(appearance)

  return (
    <div className={`${styles.card} boxShadow`}>
      <img className={styles.heroImg} src={images.sm} alt='Hero'/>
      <HeroNameAndRace name={name} description={appearance.race}/>
    </div>
  )
}

export default Card