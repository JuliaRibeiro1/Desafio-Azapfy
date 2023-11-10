import React from 'react'
import { UserContext } from '../../../useContext'
import styles from "./PowerStats.module.css"
import PowerBar from '../../Atoms/PowerBar/PowerBar'
import PowerTotal from '../../Atoms/PowerTotal/PowerTotal'

function PowerStats() {
    const {heroBattleArr} = React.useContext(UserContext)

    return (
        <div className={styles.powerStatsContainer}>
          
          {heroBattleArr.map((hero, index) => (
            <>
           
            <div className={`${styles.powerStat} boxShadow `}>
               
              {Object.entries(hero.powerstats).map(([key, value]) => (
                <PowerBar key={key} powerName={key} powerValue={value} index={index} heroBattleArr={heroBattleArr} />
              ))}
            </div>
            </>
          ))}
       
        </div>
        
      )
    }

export default PowerStats