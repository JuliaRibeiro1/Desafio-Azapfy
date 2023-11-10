import React from 'react'
import { useNavigate } from 'react-router-dom';
import ButtonStartGame from '../ButtonStartGame/ButtonStartGame';

function ButtonStartPage({children}) {
    const navigate = useNavigate();
  return (
    <ButtonStartGame onClick={() => navigate("/")}>{children}</ButtonStartGame>
  )
}

export default ButtonStartPage