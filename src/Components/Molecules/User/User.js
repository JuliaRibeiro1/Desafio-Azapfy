import React from 'react'
import ButtonHeader from '../../Atoms/Button/ButtonHeader/ButtonHeader'
import userIcon from "../../../Assets/icon-user.png"
import styles from "./User.module.css"
import { UserContext } from '../../../useContext'
import ButtonStartPage from '../../Atoms/Button/ButtonStartPage/ButtonStartPage'

function User() {
    const {userName} = React.useContext(UserContext)
    const [isOpenMenu, setIsOpenMenu] = React.useState(false)
  return (
    <div className={`${styles.user} center`} onClick={() => setIsOpenMenu(prev => !prev)}>
        <ButtonHeader>
            <img src={userIcon}/>
        </ButtonHeader>
        <span>{userName}</span>
      {isOpenMenu && <ButtonStartPage>Sair</ButtonStartPage>}
    </div>
  )
}

export default User