import React from 'react'
import InputName from '../../Atoms/Input/NameInput/InputName'
import ButtonStartGame from '../../Atoms/Button/ButtonStartGame/ButtonStartGame'
import styles from "./Form.module.css"
import useForm from '../../../Hooks/useForm'
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../../useContext'


function Form() {
  
  const {value,onChange,onBlur,error,validate} = useForm()
  const {setUserName} = React.useContext(UserContext)
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault()
    if(validate()) {
      navigate("/game")
     
    }
  }

  React.useEffect(() => {
   setUserName(value)
  },[value])

  return (
    <form className={`${styles.form} center`} onSubmit={e => handleSubmit(e)}>
        <InputName 
            value={value} 
            onChange={onChange}
            onBlur={onBlur}
            error={error}
        />
        <ButtonStartGame>Jogar</ButtonStartGame>
    </form>
  )
}

export default Form