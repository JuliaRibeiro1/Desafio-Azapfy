import React from 'react'
import styles from "./ButtonStartGame.module.css"
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../../useContext';
import ButtonGold from '../ButtonGold/ButtonGold';
import userEvent from '@testing-library/user-event';

function ButtonStartGame({children}) {
  const {userName, setHeroBattleArr} = React.useContext(UserContext)
  const navigate = useNavigate();

  function startGame() {
    if(userName) {
      console.log("OIII")
      navigate("/game")
      setHeroBattleArr([])
    }
  }
  return (
    <ButtonGold onClick={() => startGame()}>{children}</ButtonGold>
  )
}

export default ButtonStartGame