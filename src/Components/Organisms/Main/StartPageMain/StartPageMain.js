import React from 'react'
import styles from "./StartPageMain.module.css"
import Form from '../../Form/Form'
import Logo from '../../../Atoms/Logo/Logo'

function StartPageMain() {
  return (
    <main className={`${styles.main} center`}>
        <Logo/>
        <Form/>
    </main>
  )
}

export default StartPageMain