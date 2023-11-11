import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../useContext';

function PowerTotal() {
  const { setTotalPower, totalPower, heroBattleArr, setWinner, winner} = useContext(UserContext);
  const [animatedTotals, setAnimatedTotals] = useState([0, 0]);

  useEffect(() => {
    const totals = heroBattleArr.map((hero) =>
      Object.values(hero.powerstats).reduce((acc, curr) => acc + curr, 0)
    );
console.log(winner)
    const indexOfMaxTotal = totals.indexOf(Math.max(...totals));
    setWinner(heroBattleArr[indexOfMaxTotal]);
    console.log(heroBattleArr[indexOfMaxTotal])
    let currentTotals = [0, 0];
    const intervalId = setInterval(() => {
      setAnimatedTotals((prev) => {
        const updatedTotals = [...prev];
        if (currentTotals[0] < totals[0]) {
          currentTotals[0] += 1;
          updatedTotals[0] = currentTotals[0];
          setTotalPower((prevTotal) => [...prevTotal, currentTotals[0]]);
        }
        if (currentTotals[1] < totals[1]) {
          currentTotals[1] += 1;
          updatedTotals[1] = currentTotals[1];
          setTotalPower((prevTotal) => [...prevTotal, currentTotals[1]]);
        }
        return updatedTotals;
      });
    }, 5); 

   
    return () => clearInterval(intervalId);
  }, [heroBattleArr, setTotalPower]);

  return <div>{`${animatedTotals[0]} | ${animatedTotals[1]}`}</div>;
}

export default PowerTotal;