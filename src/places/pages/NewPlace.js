import React, {useCallback, useReducer} from 'react'

import Button from '../../shared/components/FormElements/Button'
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators'
import Input from '../../shared/components/FormElements/Input'
import './PlaceForm.css'


const formReducer = (state, action) =>{   
       switch (action.type){
              case 'INPUT_CHANGE':
                     let formIsValid = true; 
                                                
                     for(const inputId in state.inputs){      
                            if(inputId === action.inputId){                                     
                                   formIsValid = formIsValid && action.isValid                             }
                            else{                    
                                   formIsValid = formIsValid && state.inputs[inputId].isValid 
                            }
                     }                    

              return {
                     ...state,
                     inputs:{                  
                            ...state.inputs,
                            [action.inputId] : {value: action.value, isValid: action.isValid} 
                     },
                     isValid: formIsValid  
              }

              default:
                     return state
       }
}

const NewPlace = ()=>{

    const [formState , dispatch] = useReducer(formReducer, {
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
    })


    const InputHandler = useCallback((id, value, isValid)=>{  

       dispatch({type:'INPUT_CHANGE',
                 inputId:id, 
                 value:value, 
                 isValid: isValid} )
    }, [] )  


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