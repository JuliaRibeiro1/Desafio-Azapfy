import React from 'react'
import ButtonHeader from '../../../Atoms/Button/ButtonHeader/ButtonHeader'
import userIcon from "../../../../Assets/icon-user.png"
import audioIcon from "../../../../Assets/icon-audio.png"
import SearchBar from '../../../Molecules/SearchBar/SearchBar'

function CardsPageHeader() {
  return (
    <header>
      <div className='headerRight'>
        <ButtonHeader>
            <img src={userIcon} alt='player'/>
        </ButtonHeader>
      </div>
      <div className='headerLeft'>
        <SearchBar/> 
        <ButtonHeader>
            <img src={audioIcon} alt='audio'/>
        </ButtonHeader>
        </div>
    </header>
  )
}
//Onchange
export default CardsPageHeader