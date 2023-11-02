import React from 'react'
import audioIcon from "../../../Assets/icon-audio.png"
import audioMuteIcon from "../../../Assets/icon-mute.png"
import styles from "./ButtonIcon.module.css"

function ButtonIcon({children}) {
  return (
    <button className={styles.buttonIcon}>{children}</button>
  )
}

export default ButtonIcon