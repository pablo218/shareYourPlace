import React, {useReducer, useEffect} from 'react'

import { validate } from '../../util/validators'
import './Input.css'



const inputReducer = (state, action)=>{   //la funcion ejecutada por el reducer, recibe dos parametros, el estado actual y una accion

    switch (action.type){  //se analiza el tipo de accion despachada

        case 'CHANGE':
            return{
                ...state,           //se clona el estado actual y sobre el clon se ejecutan los cambios para mantener la inmutabilidad del estado
                value: action.val,
                isValid: validate(action.val, action.validators)        //en el clon se modifican las proiedads que se necsitaban modificcar   
            }
         case 'TOUCHED':
             return{
                 ...state,
                 isTouched: true   //isTouched determina si el formulario ha sido tocado almenos una ves por el usuario para recien ahi mostrar los mensajes arrojados por las validaciones
             }   
        
        default:
                return state    
    }

}



const Input = props =>{




    const [inputState , dispatch] = useReducer(inputReducer,{ value: props.value || '',          //el primer argumento es la funcion (siempre ejecutada fuera del componente)
                                                              isValid:props.isValid || false,   //el segundo argumento es el estado inicial
                                                              isTouched: false} )                //useReducer retorna un estado y una funcion dispatch que envia la accion a la funcion pasada como argumento
                                                                                                 //la funcion dispatch debera recibir como argumento un objeto con la propiedad type que determina la accion  
                                                                                                 // y el payload con las propiedades para modificar el estado {type:'ACTION', payload: info}

    
    
    const {id, onInput } = props
    const {value, isValid} = inputState
    
    
    useEffect(()=>{                       //usamos useEffect para ejecutar la propiedad props.onInput cuando se modifiquen cualquiera de        
        onInput(id, value, isValid)       //las propiedades pasadas como dependencias [onInput, id, value, isValid], la props onInput 
    }, [onInput, id, value, isValid])     //ejecutara una funcion definida en el componente NewPlace
    
    
    const changeHandler = event =>{

        dispatch({type:'CHANGE', 
                 val: event.target.value, 
                 validators: props.validators})

    }
    
    const touchedHandler = ()=>{

        dispatch({type: 'TOUCHED'})
                        

    }

    const element = props.element === 'input'? 
                        <input id={props.id} 
                               type={props.type} 
                               placeholder={props.placeholder} 
                               onChange={changeHandler}
                               onBlur={touchedHandler}
                               value={inputState.value}/>

                        :<textarea id={props.id} rows={props.rows || 3} 
                                   onChange={changeHandler}
                                   onBlur={touchedHandler}
                                   value={inputState.value}/>


    return (<div className={`form-control ${!inputState.isValid && inputState.isTouched && 'form-control--invalid'}`}>
                <label htmlFor={props.id}>{props.label}</label>
                {element}
                {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}

    </div>)
}


export default Input


//reducer recibe una accion y el estado actual, luego actualiza el estado en base a la accion despachada y retorna el estado
//actualizado