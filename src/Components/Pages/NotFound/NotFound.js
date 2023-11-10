import React from 'react'
import styles from "./NotFound.module.css"
import ButtonStartPage from '../../Atoms/Button/ButtonStartPage/ButtonStartPage';

function NotFound() {
  return (
    <div className={`${styles.notFound} center`}>
        <div className={`${styles.container} center`}>
            <h1>Ooops!</h1>
            <p>A página que você quer acessar não existe.</p>
            <ButtonStartPage>Voltar à página inical</ButtonStartPage>
        </div>
    </div>
  )
}

export default NotFound