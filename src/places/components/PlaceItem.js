import React, {useState} from 'react'

import Card from '../../shared/components/UIelements/Card'
import Button from '../../shared/components/FormElements/Button'
import Modal from '../../shared/components/UIelements/Modal'
import Map from '../../shared/components/UIelements/Maps'

import './PlaceItem.css'


const PlaceItem = props=>{

  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const [showMap, setShowMap] = useState(false)

  const openMapHandler = ()=> setShowMap(true)

  const closeMapHandler = ()=> setShowMap(false)

  const onDeleteHandler =  ()=>{setShowDeleteModal(true)}

  const cancelDelete = ()=>{setShowDeleteModal(false)}

  const confirmlDelete = ()=>{
      console.log('borrando...');

      setShowDeleteModal(false)
  } 

  return  (
  <React.Fragment>
   <Modal show={showMap}
          onCancel={closeMapHandler}
          header = {props.address}
          contetnClass='place-item__modal-content'
          footerClass='place-item__modal-actions'
          footer = {<Button onClick={closeMapHandler}>CLOSE</Button>}
          >
    <div className='map-container'>
        <Map center={props.coordinates} zoom={16}/>  
     </div>            
  </Modal>       
  <li className="place-item">
        <Card className="place-item__conten">
        <div className='place-item__image'>
            <img src={props.image} alt={props.title} />
        </div>
        
        <div className='place-item__info'>
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
        </div>

        <div className='place-item__actions'>
            <Button inverse onClick={openMapHandler}>MAPA</Button>
            <Button to={`/places/${props.id}`}>EDITAR</Button>            
            <Button danger onClick = {onDeleteHandler}>BORRAR</Button>
        </div>
        </Card>

        <Modal show={showDeleteModal}
               header="Borrar publicacion" 
               footer={<React.Fragment>
                   <Button inverse onClick={cancelDelete}>CANCELAR</Button>
                   <Button danger onClick={confirmlDelete}>CONFIRMAR</Button>
               </React.Fragment>}
               footerClass='place-item__actions'
               onCancel={cancelDelete}>
                       
        <p>Seguro que quieres eliminar este publicacion? No hay marchas atras :(</p>        
        </Modal>
    </li>
    </React.Fragment>
    )
}


export default PlaceItem