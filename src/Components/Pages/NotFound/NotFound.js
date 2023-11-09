import React from 'react'
import styles from "./NotFound.module.css"
import ButtonStartGame from '../../Atoms/Button/ButtonStartGame/ButtonStartGame'
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();
  return (
    <div className={`${styles.notFound} center`}>
        <div className={`${styles.container} center`}>
            <h1>Ooops!</h1>
            <p>A página que você quer acessar não existe.</p>
            <ButtonStartGame onClick={() => navigate("/")}>Voltar à página inical</ButtonStartGame>
        </div>
    </div>
  )
}

export default NotFound