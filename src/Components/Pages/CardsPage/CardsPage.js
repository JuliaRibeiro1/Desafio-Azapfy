import React, { useEffect } from 'react';
import styles from "./CardsPage.module.css";
import CardsSection from '../../Organisms/Section/CardsSection/CardsSection';
import CardsPageHeader from '../../Organisms/Header/CardsPageHeader/CardsPageHeader';
import CardsPageFooter from '../../Organisms/Footer/CardsPageFooter/CardsPageFooter';
import { UserContext } from '../../../useContext';
import { useNavigate } from 'react-router-dom';

function CardsPage() {

  const { userName, setHeroBattleArr } = React.useContext(UserContext);
  const navigate = useNavigate();



  useEffect(() => {
    if (userName === "") {
      navigate("/login"); 
    }
  }, [userName, navigate]);

  return (
    <div className={styles.cardsPage}>
      <CardsPageHeader />
      <div className='center'>
        <CardsSection />
      </div>
      <div className='center'>
        <CardsPageFooter />
      </div>
    </div>
  );
}

export default CardsPage;

