import React from 'react'


import Card from '../../shared/components/UIelements/Card'
import PlaceItem from './PlaceItem'
import Button from '../../shared/components/FormElements/Button'
import './PlacesList.css'


const PlaceList = props=>{

    if(props.items.length === 0){
        return <div className='place-lost center'>
                    <Card>
                        <h2>No se encontraron lugares... buscar ofertas de viajes?</h2>
                        <Button>Compartir un lugar</Button>
                    </Card>

        </div>
    }
    
    return <ul className='place-list'>

                {props.items.map(place =><PlaceItem key={place.id} 
                                                    id={place.id} 
                                                    image={place.imageUrl} 
                                                    title={place.title} 
                                                    description={place.description}
                                                    address={place.address}
                                                    creatorId={place.creatorId}
                                                    coordinates={place.location}/>)}
           </ul>

}


export default PlaceList