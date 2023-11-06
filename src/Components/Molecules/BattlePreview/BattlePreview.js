import React, { useEffect } from 'react'
import iconBattle from "../../../Assets/icon-battle.png"
import iconUnknown from "../../../Assets/icon-unknown.png"
import styles from "./BattlePreview.module.css"
import { UserContext } from '../../../useContext'
import { useNavigate } from 'react-router-dom'

function BattlePreview() {
    const {heroBattleArr} = React.useContext(UserContext)
    const navigate = useNavigate();
    console.log(heroBattleArr)
    React.useEffect(() => {
    if(heroBattleArr.length > 1) {
        setTimeout(() => {
            navigate("/battle")
        },1000)
       
    }
    },[heroBattleArr])
  return (
    heroBattleArr.length > 0 && <div className={`${styles.battlePreview} boxShadow`}>
        <img src={heroBattleArr[0].images.sm} className={`${styles.battlePreviewImg} boxShadow`}/>
        <img src={iconBattle} className='iconBattle'/>
        {heroBattleArr[1] ? <img src={heroBattleArr[1].images.sm} className={styles.battlePreviewImg}/> : <div  className={`${styles.battlePreviewUnknown} center boxShadow`}> <img src={iconUnknown}/> </div>}
        
    </div> 
    
  )
}

export default BattlePreview