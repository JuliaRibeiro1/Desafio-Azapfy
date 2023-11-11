import React from 'react'
import { useNavigate } from 'react-router-dom';
import ButtonGold from '../ButtonGold/ButtonGold';

function ButtonStartPage({children}) {
    const navigate = useNavigate();
  return (
    <ButtonGold onClick={() => navigate("/")}>{children}</ButtonGold>
  )
}

export default ButtonStartPage