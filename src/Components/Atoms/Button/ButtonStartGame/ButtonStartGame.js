import React from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../../useContext';
import ButtonGold from '../ButtonGold/ButtonGold';

function ButtonStartGame({children}) {
  const {userName, setHeroBattleArr} = React.useContext(UserContext)
  const navigate = useNavigate();

  function startGame() {
    if(userName) {
      navigate("/game")
      setHeroBattleArr([])
    }
  }
  return (
    <ButtonGold onClick={() => startGame()}>{children}</ButtonGold>
  )
}

export default ButtonStartGame