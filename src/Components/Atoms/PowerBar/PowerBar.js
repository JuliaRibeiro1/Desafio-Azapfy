import React from 'react'
import { Line} from 'rc-progress';
import styles from "./PowerBar.module.css"

function PowerBar({powerName, powerValue, index, heroBattleArr,key}) {
  const [powerAnimation, setPowerAnimation] = React.useState(0)
  
  React.useEffect(() => {
    const intervalId = setInterval(() => {
     
      if (powerAnimation <= powerValue) {
        setPowerAnimation(prev => Math.min(prev + 1, powerValue));
        
      } else {
        clearInterval(intervalId); // Limpa o intervalo quando powerAnimation atinge powerValue
      }
    }, 10);

    return () => {
      clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
    };
  }, [powerValue]);

  function comparePower() {
    let nextIndex = index ===  0 ? 1 : 0
    if(heroBattleArr[index].powerstats[powerName] > heroBattleArr[nextIndex].powerstats[powerName]) {
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
      
        <Line percent={powerAnimation} trailColor=" #d9d9d957" strokeColor={strokeColor} strokeWidth={2} trailWidth={2} />
   
        <span>{powerValue}</span>
        </div>
        
    </div>
  )
}

export default PowerBar