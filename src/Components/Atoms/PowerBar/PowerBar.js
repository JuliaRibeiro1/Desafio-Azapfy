import React from 'react'
import { Line} from 'rc-progress';
import styles from "./PowerBar.module.css"

function PowerBar({powerName, powerValue}) {
  const [value,setValue] = React.useState(powerValue)
  

  return (
    <div className={styles.powerBarContainer}>
        <h4>{powerName}</h4>
        <div className={styles.powerBar}>
      
        <Line percent={value} trailColor=" #d9d9d957" strokeColor="#4AA91D" strokeWidth={2} trailWidth={2}/>
   
        <span>{powerValue}</span>
        </div>
        
    </div>
  )
}

export default PowerBar