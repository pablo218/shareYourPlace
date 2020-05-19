import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'


import Users from './user/pages/Users'
import NewPlace from './places/pages/NewPlace'
import UpdatePlace from './places/pages/UpdatePlace'
import UserPlaces from './places/pages/UserPlaces'
import MainNavigation from './shared/components/Navigation/MainNavigation'



const App = ()=> {

  return <BrowserRouter>
         <MainNavigation/>
         <main>
        <Switch>
           <Route path='/:userId/places' exact>
              <UserPlaces/>
           </Route>
           <Route path='/places/new' exact>
              <NewPlace/>
           </Route>  
           <Route path='/places/:placeId'>
               <UpdatePlace />
           </Route> 
           <Route path='/' exact>
              <Users/>
           </Route> 

          <Redirect to="/"/>
        </Switch>
        </main>
        </BrowserRouter>

}

export default App;