import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../useContext';
import styles from "./PowerTotal.module.css";

function PowerTotal({ index }) {
  const { heroBattleArr, setWinner, winner } = useContext(UserContext);
  const [powerCount, setPowerCount] = React.useState(0);
  const [maxTotal, setMaxTotal] = useState(0);

  useEffect(() => {
    if (heroBattleArr[index]) {
      const total = Object.values(heroBattleArr[index].powerstats).reduce((acc, curr) => acc + curr, 0);
  
      if (total >= maxTotal) {
        setMaxTotal(total);
        setWinner(heroBattleArr[index]);
      }
  
      const intervalId = setInterval(() => {
        if (powerCount < total) {
          setPowerCount(prev => Math.min(prev + 1));
        } else {
          clearInterval(intervalId);
        }
      }, 1.5);
  
      return () => clearInterval(intervalId);
    }
  }, [heroBattleArr, index, maxTotal, powerCount]);

  return (
    <div className={styles.powersTotals}>
      <div>{powerCount}</div>
    </div>
  );
}

export default PowerTotal;