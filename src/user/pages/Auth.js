import React, {useState, useContext} from 'react'

import Button from '../../shared/components/FormElements/Button'
import Input from '../../shared/components/FormElements/Input'
import {VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../shared/util/validators'
import Card from '../../shared/components/UIelements/Card'
import {useForm} from '../../shared/hooks/form-hook'
import {AuthContext} from '../../shared/context/AuthContext'
import './Auth.css'


const Auth = props=>{

    const auth = useContext(AuthContext)

    const [loginMode, setLoginMode] = useState(true)

    const [formState, inputHandler, setForm] = useForm(
        {
            email:{
                value: '',
                isValid: false
            },
            password:{
                value:'',
                isValid:false
            }
        }, false
    )

    const switchMode = ()=>{

        if(!loginMode){
            setForm({
                ...formState.inputs,
                name:undefined
            }, formState.inputs.email.isValid && formState.inputs.password.isValid)

            //console.log(formState);
        }
        else{
            setForm({
                ...formState.inputs,
                name: {value:'', isValid:false},                
            }, false)

            //console.log(formState);
        }

        setLoginMode(prevMode => !prevMode )
    }

    const onSubmitHandler =(event)=>{
        event.preventDefault()

        if(loginMode){
            auth.login()
        }
        else{
            console.log('sign up mode');
        }

    }
    console.log(formState);

    return(
        <Card className = 'authentication'>
            <form onSubmit={onSubmitHandler}>
                {!loginMode &&
                 <Input element='input'
                       id='name'
                       label='Nombre'
                       onInput={inputHandler}
                       placeholder="Dinos tu nombre"
                       type='text'
                       errorText='Ingresa un nombre valido'
                       validators={[VALIDATOR_REQUIRE()]}
                        />}
                <Input element='input'
                       id='email'
                       label='E-mail'
                       onInput={inputHandler}
                       placeholder="Ingresa tu email"
                       type='email'
                       errorText='Ingresa un email valido'
                       validators={[VALIDATOR_EMAIL()]}
                        />
                <Input element='input'
                       id='password'
                       label='Contraseña'
                       onInput={inputHandler}
                       placeholder="Contraseña"
                       type='password'
                       errorText='Ingresa una contraseña valida, al menos 5 caracteres'
                       validators={[VALIDATOR_MINLENGTH(5)]}
                        />
                <Button danger disabled={!formState.isValid}>{loginMode?'INGRESAR':'REGISTRARME'}</Button>


            </form>
            <hr/>
                {loginMode?<p>No tiene cuenta aun?</p>:<p>Ya tiene una cuenta viajero?</p>}
                
                <Button inverse onClick={switchMode}>{loginMode?'QUIERO REGISTRARME':'QUIERO INGRESAR'}</Button>
        </Card>
        
    )
}

export default Auth