import React from 'react'

import Card from '../../shared/components/UIelements/Card'
import UserItem from './UserItem'
import './UsersList.css'

const userList = props =>{

    if(props.items.length === 0){
            return <div className='center'>
                <Card>
                    <h2>No se encontraron viajeros, se el primero!</h2>
                </Card>
            </div>
    }
    return <ul className='users-list'>{props.items.map(user => 
           <UserItem key={user.id} 
                     id={user.id}
                     image={user.image} 
                     name={user.name}
                     placesCount={user.places} />)} 
                     </ul>
    

}


export default userList