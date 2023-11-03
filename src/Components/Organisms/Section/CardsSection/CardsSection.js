import React from 'react'
import useFetch from '../../../../Hooks/useFetch'
import Card from "./../../../Molecules/Card/Card"


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
        
        data.map(player => {
            console.log("OIII")
            if(player.id < 25) {
                return (<Card key={player.id} {...player}/>)
            }
            return null
        })
    )
    }
}

export default CardsSection