import React from 'react'
import useFetch from '../../../../Hooks/useFetch'
import Card from "./../../../Molecules/Card/Card"
import styles from "./CardsSection.module.css"

function CardsSection() {
    const {data,error,loading} = useFetch()
  

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
            console.log("OIII")
            if(player.id <= 23) {
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