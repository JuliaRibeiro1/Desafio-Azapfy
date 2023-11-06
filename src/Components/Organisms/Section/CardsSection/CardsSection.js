import React, { useContext } from 'react'
import useFetch from '../../../../Hooks/useFetch'
import Card from "./../../../Molecules/Card/Card"
import styles from "./CardsSection.module.css"
import {UserContext} from '../../../../useContext'

function CardsSection() {

    const {cardsArr,data,loading,error,currentPageCards,setCardsArr} = useContext(UserContext)
    console.log(data)
    console.log(currentPageCards)
    if(loading) {
        return (
            <div>oii</div>
        )
    }
    if(error) {
        return <div>Error: {error}</div>
    }
    if(!data) {
        setCardsArr(data)
        return null
    }
    else {
    return (
    <div className={`${styles.cardsSection} `}>
       { currentPageCards.map(player => {
            return (<Card key={player.id} {...player}/>)
        })
    }
   
    </div>
     )
    }
}

export default CardsSection