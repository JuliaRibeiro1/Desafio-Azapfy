import React from 'react'
import ButtonHeader from '../../Atoms/Button/ButtonHeader/ButtonHeader'
import userIcon from "../../../Assets/icon-user.png"
import styles from "./User.module.css"
import { UserContext } from '../../../useContext'
import ButtonStartPage from '../../Atoms/Button/ButtonStartPage/ButtonStartPage'

function User() {
    const {userName} = React.useContext(UserContext)
  return (
    <div className={`${styles.user} center`}>
        <ButtonHeader>
            <img src={userIcon}/>
        </ButtonHeader>
        <span>{userName}</span>
  
    </div>
  )
}

export default User