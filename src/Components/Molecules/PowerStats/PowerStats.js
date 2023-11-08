import React from 'react'
import { UserContext } from '../../../useContext'
import Power from '../../Atoms/PowerBar/PowerBar'
import styles from "./PowerStats.module.css"

function PowerStats() {
    const {heroBattleArr} = React.useContext(UserContext)
    console.log(heroBattleArr)

    return (
        <div className={styles.powerStatsContainer}>
          {heroBattleArr.map((hero) => (
            <div className={`${styles.powerStat} boxShadow `}>
              {Object.entries(hero.powerstats).map(([key, value]) => (
                <Power key={key} powerName={key} powerValue={value} />
              ))}
            </div>
          ))}
        </div>
      )
    }

export default PowerStats