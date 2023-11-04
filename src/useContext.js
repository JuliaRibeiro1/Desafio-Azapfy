import React from 'react'
import useFetch from './Hooks/useFetch'
export const UserContext = React.createContext()

export function UserProvider({children}) {
   
    const {data,error,loading} = useFetch()
    const [currentCards, setCurrentCards] = React.useState(0)
    const cardsInOnePage = 23
    //const totalPages = Math.round(data.length / 18)

    return (
        <UserContext.Provider value={{cardsInOnePage, currentCards, setCurrentCards,data,error,loading}}>
            {children}
        </UserContext.Provider>
    )
}

