import React, {useContext} from 'react'
import {NavLink } from 'react-router-dom'

import {AuthContext} from '../../context/AuthContext'
import './navLinks.css'


const NavLinks = props =>{

const auth = useContext(AuthContext)    

return <ul className='nav-links'>

    <li>
        <NavLink to="/" exact>Viajeros</NavLink>        
    </li>

    {auth.isLoggedIn&&
        <li>
        <NavLink to="/u1/places">Mis lugares</NavLink>        
    </li>}
    {auth.isLoggedIn&&
    <li>
        <NavLink to="/places/new">Agregar lugar</NavLink>        
    </li>}
    {!auth.isLoggedIn&&
    <li>
        <NavLink to="/auth">Ingresar</NavLink>        
    </li>}
    {auth.isLoggedIn&&
    <li>
        <button onClick={auth.logout}>Salir</button>        
    </li>}

</ul>

}


export default NavLinks