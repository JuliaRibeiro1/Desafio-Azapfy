import React from 'react'
import styles from "./SkeletonLoading.module.css"

function SkeletonLoading({children}) {
  return (
    <div className={styles.skeletonLoading}>
      {children}
    </div>
  )
}

export default SkeletonLoading