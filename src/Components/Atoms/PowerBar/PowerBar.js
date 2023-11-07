import React from 'react'
import { Line} from 'rc-progress';
import styles from "./PowerBar.module.css"

function PowerBar({powerName, powerValue}) {

  return (
    <div>

        <h4>{powerName}</h4>
        <Line percent={powerValue} trailColor=" #d9d9d957" strokeColor="#4AA91D" strokeWidth={10} trailWidth={10}/>
    </div>
  )
}

export default PowerBar