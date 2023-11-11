import React from 'react'
import styles from "./Card.module.css"
import HeroNameAndRace from '../../Atoms/Text/HeroNameAndRace/HeroNameAndRace'
import { UserContext } from '../../../useContext'

function Card(props) {

  const {name,appearance,images,powerstats} = props
  const {heroBattle} = React.useContext(UserContext)

  
  return (
    <div className={`${styles.card} boxShadow`} onClick={() => heroBattle(props)}>
     {images && <img className={styles.heroImg} src={images.sm} alt='Hero'/>}
      {name && <HeroNameAndRace name={name} description={appearance ? appearance.race : ""}/>}
    </div>
  )
}

export default Card