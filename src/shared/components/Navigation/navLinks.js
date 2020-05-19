import React from 'react'
import {NavLink } from 'react-router-dom'
import './navLinks.css'

const NavLinks = props =>{

return <ul className='nav-links'>

    <li>
        <NavLink to="/" exact>Viajeros</NavLink>        
    </li>
    <li>
        <NavLink to="/u1/places">Mis lugares</NavLink>        
    </li>
    <li>
        <NavLink to="/places/new">Agregar lugar</NavLink>        
    </li>
    <li>
        <NavLink to="/auth">Ingresar</NavLink>        
    </li>

</ul>

}


export default NavLinks