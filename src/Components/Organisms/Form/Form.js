import React from 'react'
import InputName from '../../Atoms/Input/NameInput/InputName'
import ButtonStartGame from '../../Atoms/Button/ButtonStartGame/ButtonStartGame'
import styles from "./Form.module.css"
import useForm from '../../../Hooks/useForm'
import { useNavigate } from "react-router-dom";


function Form() {
  
  const name = useForm()


  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault()
    if(name.validate()) {
      navigate("/game")
    }
  }

  return (
    <form className={`${styles.form} center`} onSubmit={e => handleSubmit(e)}>
        <InputName 
            value={name.value} 
            onChange={name.onChange}
            onBlur={name.onBlur}
            error={name.error}
        />
        <ButtonStartGame/>
    </form>
  )
}

export default Form