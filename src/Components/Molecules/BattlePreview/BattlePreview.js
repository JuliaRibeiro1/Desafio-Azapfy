import React from 'react'
import iconBattle from "../../../Assets/icon-battle.png"
import iconUnknown from "../../../Assets/icon-unknown.png"
import styles from "./BattlePreview.module.css"
import { UserContext } from '../../../useContext'

function BattlePreview() {
    const {heroBattleArr} = React.useContext(UserContext)
    console.log(heroBattleArr)
    
  return (
    heroBattleArr.length > 0 && <div className={`${styles.battlePreview} boxShadow`}>
        <img src={heroBattleArr[0].images.sm} className={`${styles.battlePreviewImg} boxShadow`}/>
        <img src={iconBattle} className='iconBattle'/>
        {heroBattleArr[1] ? <img src={heroBattleArr[1].images.sm} className={styles.battlePreviewImg}/> : <div  className={`${styles.battlePreviewUnknown} center boxShadow`}> <img src={iconUnknown}/> </div>}
        
    </div> 
    
  )
}

export default BattlePreview