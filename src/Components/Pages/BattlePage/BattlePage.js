import React, { useState, useEffect } from 'react';
import styles from "./BattlePage.module.css";
import BattleSection from '../../Organisms/Section/BattleSection/BattleSection';
import { UserContext } from '../../../useContext';
import WinnerModal from '../../Organisms/WinnerModal/WinnerModal';

function BattlePage() {
  const { winner } = React.useContext(UserContext);
  const [showWinnerModal, setShowWinnerModal] = useState(false);

  useEffect(() => {
    if (winner) {
      
      const timeoutId = setTimeout(() => {
        setShowWinnerModal(true);
      }, 8000);

      return () => clearTimeout(timeoutId);
    }
  }, [winner]);

  return (
    <div className={`${styles.battlePage} center`}>
      <BattleSection />
      {showWinnerModal && <WinnerModal name={"Winner"} image={winner.images} />}
    </div>
  );
}

export default BattlePage;