import React, { useContext } from 'react'
import useFetch from '../../../../Hooks/useFetch'
import Card from "./../../../Molecules/Card/Card"
import styles from "./CardsSection.module.css"
import {UserContext} from '../../../../useContext'
import SkeletonLoading from '../../../Molecules/SkeletonLoading/SkeletonLoading'

function CardsSection() {

    const {cardsArr,data,loading,error,currentPageCards,setCardsArr, setCardsInOnePage, cardsInOnePage} = React.useContext(UserContext)
  
  
    if(loading) {
        const elements = [];
        for(let i = 0; i < 24; i++) {
            console.log("OI")
            elements.push(<SkeletonLoading><Card/></SkeletonLoading>)

    }
    return <div className={styles.cardsSection}>{elements}</div>;
        
    }
    if(error) {
        return <div>Error: {error}</div>
    }
    if(!cardsArr) {
       
        return null
    }
    if(cardsArr) {
    
    return (
      
    <div className={styles.cardsSection}>
       { currentPageCards.map(player => {
            return (<Card key={player.id} {...player}/>)
        })
    }
   
    </div>
     )
    }
}

export default CardsSection