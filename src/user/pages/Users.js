import React from 'react'

import UserList from '../components/UsersList'

const users = ()=>{

    const USERS = [{id:'u1', 
                    name:'Pablo Gonzales', 
                    image: 'https://images.pexels.com/photos/3416556/pexels-photo-3416556.jpeg?cs=srgb&dl=naturaleza-cielo-fotografia-exterior-3416556.jpg&fm=jpg',
                    places:3}]

    return <UserList items={USERS}/>
}


export default users