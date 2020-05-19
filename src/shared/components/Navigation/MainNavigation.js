import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import './MainNavigation.css'
import MainHeader from './MainHeader'
import NavLinks from './navLinks'
import BackDrop from '../UIelements/Backdrop'
import SideDrawer from './sideDrawer'



const MainNavigation = props =>{

    const [sideDrawerIsOpen , setSideDrawerIsOpen ] = useState(false)

    const openDrawerHandler = ()=>{
        setSideDrawerIsOpen(true)
    }

    const closeDrawerHandler = ()=>    {
        setSideDrawerIsOpen(false)
    }

    return(
<React.Fragment>
     {sideDrawerIsOpen && <BackDrop onClick={closeDrawerHandler}/>}


    <SideDrawer show={sideDrawerIsOpen} clicked={closeDrawerHandler}>
        <nav className='main-navigation__drawer-nav'><NavLinks/></nav>
    </SideDrawer>

    <MainHeader>
        <button className='main-navigation__menu-btn' onClick={openDrawerHandler}>
            <span />
            <span />
            <span />
        </button>
        <h1 className='main-navigation__title'>
            <Link to='/'>Share you place</Link>
        </h1>
        <nav className='main-navigation__header-nav'> 
            <NavLinks/>
        </nav>
    </MainHeader>
    </React.Fragment>)
}


export default MainNavigation