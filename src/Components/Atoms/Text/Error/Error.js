import React from 'react'
import styles from "./Error.module.css"

function Error({children}) {
  return (
    <p className={`${styles.error} textShadow`}>{children}</p>
  )
}

export default Error