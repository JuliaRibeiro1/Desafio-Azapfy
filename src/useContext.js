import React from 'react'
import useFetch from './Hooks/useFetch'
export const UserContext = React.createContext()

export function UserProvider({children}) {
   
    const {data,error,loading} = useFetch()
    const [cardsArr, setCardsArr] = React.useState([])
    const [currentPageCards, setCurrentPageCards] = React.useState([])
    const [heroBattleArr, setHeroBattleArr] = React.useState([])
    const [currentPage, setCurrentPage] = React.useState(1)
    const [cardsInOnePage,setCardsInOnePage] = React.useState(24)
   

    React.useEffect(() => {
        
        if (data) {
          
           setCardsArr(data)

        }
      }, [data]);
      
      function nextPage() {
        
        setCurrentPage(prev => prev + 1)
   
      }
      function previousPage() {
        
        setCurrentPage(prev => prev - 1)

      }

      function heroBattle(hero) {
        console.log("oII")
        if(heroBattleArr.length < 2) {
          setHeroBattleArr(prev => [...prev,hero])
          if(heroBattleArr.length === 1) {
            
          }
        }
      }

      React.useEffect(() => {
        const startIndex = (currentPage - 1) * cardsInOnePage;
        const endIndex = startIndex + cardsInOnePage;
        setCurrentPageCards(cardsArr.slice(startIndex, endIndex));
      }, [cardsArr, currentPage, cardsInOnePage]);
    
      
      React.useEffect(() => {
        const updateCardsInOnePage = () => {
          if (window.innerWidth < 500) {
            setCardsInOnePage(10);
          } else {
            setCardsInOnePage(24);
          }
        };
    

        window.addEventListener('resize', updateCardsInOnePage);
    
        updateCardsInOnePage();

        return () => {
          window.removeEventListener('resize', updateCardsInOnePage);
        };
      }, []); 
    
    return (
        <UserContext.Provider 
        value={{
          cardsInOnePage, 
          setCardsInOnePage,
          currentPage, 
          setCurrentPage,
          data,
          error,
          loading,
          currentPageCards,
          nextPage,
          previousPage,
          setCardsArr, 
          cardsArr,
          heroBattle,
          heroBattleArr
          }}>

            {children}
        </UserContext.Provider>
    )
}

