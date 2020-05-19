import React from 'react'
import {useParams} from 'react-router-dom'

import PlaceList from '../components/PlacesList'

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

const UserPlaces = props =>{

    const userId = useParams().userId  //el userId es pasado en el path del route correspondiente
    
    const loadedPlace = DUMMY_PLACES.filter(place => place.creator === userId)

    return <PlaceList items = {loadedPlace} />
}


export default UserPlaces