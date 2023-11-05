import React from 'react'
import useFetch from './Hooks/useFetch'
export const UserContext = React.createContext()

export function UserProvider({children}) {
   
    const {data,error,loading} = useFetch()
    const [cardsArr, setCardsArr] = React.useState([])
    const [currentPageCards, setCurrentPageCards] = React.useState([])
    const [currentPage, setCurrentPage] = React.useState(1)
    const cardsInOnePage = 18
   
    
    React.useEffect(() => {
        if (data) {
            setCardsArr(data)
           setCurrentPageCards(cardsArr.slice(0, cardsInOnePage))
      
        console.log(currentPageCards)
        }
      }, [data]);
      
      function nextPage() {
        
        setCurrentPage(prev => prev + 1)
        const startIndex = currentPage * cardsInOnePage;
        const endIndex = startIndex + cardsInOnePage;
     
        setCurrentPageCards(cardsArr.slice(startIndex, endIndex))
        
      }
      function previousPage() {
        
        setCurrentPage(prev => prev - 1)
        const startIndex = (currentPage - 2) * cardsInOnePage;
        const endIndex = startIndex + cardsInOnePage;
      
        
        setCurrentPageCards( cardsArr.slice(startIndex, endIndex))
        console.log(currentPage)
        console.log(endIndex)
        console.log(currentPage)
      }
    return (
        <UserContext.Provider value={{cardsInOnePage, currentPage, setCurrentPage,data,error,loading,currentPageCards,nextPage,previousPage}}>
            {children}
        </UserContext.Provider>
    )
}

