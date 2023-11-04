import React, { useContext } from 'react'
import useFetch from '../../../../Hooks/useFetch'
import Card from "./../../../Molecules/Card/Card"
import styles from "./CardsSection.module.css"
import {UserContext} from '../../../../useContext'

function CardsSection() {

    const {cardsInOnePage,data,loading,error} = useContext(UserContext)
   console.log(data)
    if(loading) {
        return (
            <div>oii</div>
        )
    }
    if(error) {
        return <div>Error: {error}</div>
    }
    if(!data) {
        return null
    }
    else {
    return (
    <div className={`${styles.cardsSection} `}>
       { data.map(player => {

            if(player.id <= cardsInOnePage) {
                return (<Card key={player.id} {...player}/>)
            }

            return null
        })
    }
   
    </div>
     )
    }
}

export default CardsSection