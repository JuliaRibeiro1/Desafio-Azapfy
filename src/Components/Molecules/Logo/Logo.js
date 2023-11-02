import React from 'react'
import GameTitle from '../../Atoms/Text/GameName/GameTitle'
import GameSubtitle from '../../Atoms/Text/GameSubtitle/GameSubtitle'
import InputName from '../../Atoms/Input/NameInput/InputName'

function Logo() {
  return (
    <div className='center'>
        <GameTitle/>
        <GameSubtitle/>
    </div>
  )
}

export default Logo