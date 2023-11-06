import React from 'react'
import styles from "./Card.module.css"
import HeroNameAndRace from '../../Atoms/HeroNameAndRace/HeroNameAndRace'
import { UserContext } from '../../../useContext'

function Card(props) {

  const {name,appearance,images,powerstats} = props
  const {heroBattle} = React.useContext(UserContext)

  return (
    <div className={`${styles.card} boxShadow`} onClick={() => heroBattle(props)}>
      <img className={styles.heroImg} src={images.sm} alt='Hero'/>
      <HeroNameAndRace name={name} description={appearance.race}/>
    </div>
  )
}

export default Card