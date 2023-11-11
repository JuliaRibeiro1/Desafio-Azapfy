import React from 'react'
import BattleHero from '../../Molecules/BattleHero/BattleHero'
import styles from "./WinnerModal.module.css"
import ButtonStartPage from "../../Atoms/Button/ButtonStartPage/ButtonStartPage"
import ButtonStartGame from '../../Atoms/Button/ButtonStartGame/ButtonStartGame'

function WinnerModal({name, image}) {
  return (
    <div className={`${styles.winnerModal} center boxShadow`}>
      <BattleHero name={name} image={image.sm}/>
      <ButtonStartGame>Jogar de novo</ButtonStartGame>
      <ButtonStartPage>Sair</ButtonStartPage>
    </div>
  )
}

export default WinnerModal