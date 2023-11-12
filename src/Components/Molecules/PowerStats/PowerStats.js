import React from 'react'
import { UserContext } from '../../../useContext'
import styles from "./PowerStats.module.css"
import PowerBar from '../../Atoms/PowerBar/PowerBar'

function PowerStats() {
    const {heroBattleArr} = React.useContext(UserContext)

    return (
        <div className={styles.powerStatsContainer}>
          
          {heroBattleArr.map((hero, index) => (
          
            <div className={`${styles.powerStat} boxShadow `}>
               
              {Object.entries(hero.powerstats).map(([keyObj, value]) => (
                <PowerBar key={`${index}-${keyObj}`} powerName={keyObj} powerValue={value} index={index} heroBattleArr={heroBattleArr}/>
                
              ))}
            </div>
        
          ))}
       
        </div>
        
      )
    }

export default PowerStats