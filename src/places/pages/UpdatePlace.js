import React from  'react'
import {useParams} from 'react-router-dom'

import {VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators' 
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'

import './PlaceForm.css'


const DUMMY_PLACES = [
    {    id: 'id1',
        title: 'EMPIRE STATE',
        description: 'quizas el rascacielos mas famoso (aunque no el mas alto)',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Empire_State_Building_Blue_Obama_Election.JPG/1280px-Empire_State_Building_Blue_Obama_Election.JPG',
        address:'20 W 34th St, New York, NY 10001, Estados Unidos',
        location: {
            lat:40.7484405,
            lng:-73.9878584
        },
        creator: 'u1'    
    },
    {   id: 'id2',
        title: 'EMPIRE STATE',
        description: 'quizas el rascacielos mas famoso (aunque no el mas alto)',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/USA-NYC-Empire_State0.JPG/800px-USA-NYC-Empire_State0.JPG',
        address:'20 W 34th St, New York, NY 10001, Estados Unidos',
        location: {
            lat:40.7484405,
            lng:-73.9878584
        },
        creator: 'u2'    
    }
    ]


const UpdatePlace = props =>{

    const placeId = useParams().placeId

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId)

    if(!identifiedPlace){
        return <h2>No de encontraron lugares</h2>
    }
    
    return <form className='place-form'>

            <Input id='title'
                   element='input'
                   type='text' 
                   label='Titulo' 
                   validators={[VALIDATOR_REQUIRE()]}
                   errorText='Ingresa una direccion valida'
                   onInput = {()=>{}}
                   value = {identifiedPlace.title}
                   isValid={true}
                   />

            <Input id='description'
                   element='textarea'
                   label='Descripcion' 
                   validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5) ]}
                   errorText='Se creativo! Igresa un comentario de tu visita a este sitio (al menos 5 caracteres)           '
                   onInput = {()=>{}}                   
                   value = {identifiedPlace.description}
                   isValid={true}
                   />

              <Button type='submit' disabled={true}>Actualizar</Button>

            
         </form>

}

export default UpdatePlace