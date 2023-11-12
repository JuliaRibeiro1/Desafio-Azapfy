import React from 'react'
import BattleHero from '../../Molecules/BattleHero/BattleHero'
import styles from "./WinnerModal.module.css"
import ButtonStartPage from "../../Atoms/Button/ButtonStartPage/ButtonStartPage"
import ButtonStartGame from '../../Atoms/Button/ButtonStartGame/ButtonStartGame'
import HeroName from '../../Atoms/Text/HeroName/HeroName'

function WinnerModal({name, image}) {
  console.log(image)
  return (
    <div className={`${styles.winnerModal} center boxShadow`}>
       <HeroName>{name}</HeroName>
       <img src={image.sm} className='boxShadow'/>
      <ButtonStartGame>Jogar de novo</ButtonStartGame>
      <ButtonStartPage>Sair</ButtonStartPage>
    </div>
  )
}

export default WinnerModal