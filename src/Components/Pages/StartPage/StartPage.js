import React from 'react'
import styles from "./StartPage.module.css"

import StartPageMain from '../../Organisms/Main/StartPageMain/StartPageMain'

function StartPage() {
  alert("O link para fazer a solicitação dos dados é bloqueado pelo navegador pois não é considerado seguro, então peço que clique no cadeado(firefox) ou em configuração do site(chrome) e vá em desativar proteção.")
  return (
    <div className={`${styles.startPage} center`}>
        <StartPageMain/>
    </div>
  )
}

export default StartPage