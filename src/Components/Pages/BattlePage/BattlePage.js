import React from 'react'
import styles from "./BattlePage.module.css"
import BattleSection from '../../Organisms/Section/BattleSection/BattleSection'
import { UserContext } from '../../../useContext'
import WinnerModal from '../../Organisms/WinnerModal/WinnerModal'

function BattlePage() {
  const {winner} = React.useContext(UserContext)
  return (
    <div className={`${styles.battlePage} center`}>
        <BattleSection/>
        {winner && <WinnerModal name={"Winner"} image={winner.images}/>}
    </div>
  )
}

export default BattlePage