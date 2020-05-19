import React from 'react'
import ReactDOM  from 'react-dom'
import {CSSTransition} from 'react-transition-group'

import './sideDrawer.css'


const SideDrawer = props =>{

const content = (<CSSTransition in={props.show} 
                                timeout={200} 
                                classNames='slide-in-left' 
                                mountOnEnter 
                                unmountOnExit>
                    <aside className='side-drawer'
                            onClick={props.clicked}>
                                {props.children}
                    </aside>
                </CSSTransition>)     

return ReactDOM.createPortal(content, document.getElementById('drawer-hook')) //create portal sirve para poder ubicar semanticamente un elemento donde queramos

}

export default SideDrawer