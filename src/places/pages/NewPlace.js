import React from 'react'

import Button from '../../shared/components/FormElements/Button'
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators'
import Input from '../../shared/components/FormElements/Input'
import {useForm} from '../../shared/hooks/form-hook'
import './PlaceForm.css'




const NewPlace = ()=>{

   const [formState, InputHandler] = useForm(
       {
              title:{
                     value: '',
                     isValid: false
              },
              description:{
                     value: '',
                     isValid: false
              },
              address:{
                     value: '',
                     isValid: false
              },
           },
           false
   )    


    const placeSubmitHandler = event =>{
           event.preventDefault()

           console.log(formState.inputs); 
    }

    return <form className='place-form' onSubmit={placeSubmitHandler}>
        
            <Input id='title'
                   element='input'
                   type='text' 
                   label='Titulo' 
                   validators={[VALIDATOR_REQUIRE()]}
                   errorText='Ingresa un titulo'
                   onInput = {InputHandler}
                   />

            <Input id='address'
                   element='input'
                   type='text' 
                   label='Direccion' 
                   validators={[VALIDATOR_REQUIRE()]}
                   errorText='Ingresa una direccion valida'
                   onInput = {InputHandler}
                   />

            <Input id='description'
                   element='textarea'
                   label='Descripcion' 
                   validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5) ]}
                   errorText='Se creativo! Igresa un comentario de tu visita a este sitio (al menos 5 caracteres)'
                   onInput = {InputHandler}
                   />

              <Button type='submit' disabled={!formState.isValid}>Agregar lugar</Button>
        </form>

}


export default NewPlace

/*
           inputs:{
              title:{
                     value: '',
                     isValid: false
              },
              description:{
                     value: '',
                     isValid: false
              },
              address:{
                     value: '',
                     isValid: false
              },
           },
           isValid : false

*/           