import React from 'react'
import InputName from '../../../Atoms/Input/NameInput/InputName'
import Logo from '../../../Molecules/Logo/Logo'
import styles from "./StartPageMain.module.css"
import ButtonStartGame from '../../../Atoms/Button/ButtonStartGame/ButtonStartGame'

function StartPageMain() {
  return (
    <main className={`${styles.main} center`}>
        <Logo/>
        <InputName/>
        <ButtonStartGame/>
    </main>
  )
}

export default StartPageMain