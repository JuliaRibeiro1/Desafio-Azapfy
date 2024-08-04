import React from 'react'
import { Line} from 'rc-progress';
import styles from "./PowerBar.module.css"
import { UserContext } from '../../../useContext';

function PowerBar({powerName, powerValue, index, heroBattleArr}) {
  const {setWinner} = React.useContext(UserContext)
  const [powerAnimation, setPowerAnimation] = React.useState(0)
  
  React.useEffect(() => {
    const intervalId = setInterval(() => {
     
      if (powerAnimation <= powerValue) {
        setPowerAnimation(prev => Math.min(prev + 1, powerValue));
        
      } else {
        setWinner(powerAnimation)
        clearInterval(intervalId); 
      }
    }, 45);
    
    return () => {
      clearInterval(intervalId);
    };
  }, [powerValue]);



  function comparePower() {
    let nextIndex = index ===  0 ? 1 : 0
    if(heroBattleArr.length > 1 && heroBattleArr[index].powerstats[powerName] > heroBattleArr[nextIndex].powerstats[powerName]) {
        return true
    }
    else {
      return false
    }
  }

  const strokeColor = comparePower() ? "#4AA91D" : "#ff0000"
  return (
    <div className={styles.powerBarContainer}>
        <h4>{powerName}</h4>
        <div className={styles.powerBar}>
      
        <Line  trailColor=" #d9d9d957" strokeColor={strokeColor} strokeWidth={2} trailWidth={2} />
   
        <span>{powerValue}</span>
        </div>
        
    </div>
  )
}

export default PowerBar