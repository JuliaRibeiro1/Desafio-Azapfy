import React from 'react'
import { UserContext } from '../../../useContext'
import styles from "./BattleHeros.module.css"
import BattleHero from '../BattleHero/BattleHero'
import NotFound from "../../Pages/NotFound/NotFound"
import { useNavigate } from 'react-router-dom'
import CardsPage from '../../Pages/CardsPage/CardsPage'
function BattleHeros() {
    const {heroBattleArr} = React.useContext(UserContext)
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!heroBattleArr) {
            navigate("*");
        }
        
    }, [heroBattleArr, navigate]);


  return (
    heroBattleArr && heroBattleArr.length > 1 ? 
    <div className={styles.battleHeros}>
        <BattleHero name={heroBattleArr[0].name} image={heroBattleArr[0].images.md} index={0}/>
        <span className='goldText'>Vs</span>
        <BattleHero name={heroBattleArr[1].name} image={heroBattleArr[1].images.md} styleImg={true} index={1}/>
    </div> : navigate("/game")
  )
}

export default BattleHeros