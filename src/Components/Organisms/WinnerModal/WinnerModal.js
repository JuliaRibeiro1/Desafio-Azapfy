import React from 'react'
import styles from "./WinnerModal.module.css"
import ButtonStartPage from "../../Atoms/Button/ButtonStartPage/ButtonStartPage"
import ButtonStartGame from '../../Atoms/Button/ButtonStartGame/ButtonStartGame'
import HeroName from '../../Atoms/Text/HeroName/HeroName'
import { UserContext } from '../../../useContext'

function WinnerModal({name, image}) {
  const {heroBattleArr } = React.useContext(UserContext);

  if(heroBattleArr && heroBattleArr.length > 1) {
  return (
    <div className={`${styles.winnerModal} center boxShadow`}>
       <HeroName>{name}</HeroName>
       <img src={image.sm} className='boxShadow' alt='winner'/>
      <ButtonStartGame>Jogar de novo</ButtonStartGame>
      <ButtonStartPage>Sair</ButtonStartPage>
    </div>
  )
}
}

export default WinnerModal