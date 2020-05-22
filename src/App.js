import React, {useCallback, useState} from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'


import Users from './user/pages/Users'
import NewPlace from './places/pages/NewPlace'
import UpdatePlace from './places/pages/UpdatePlace'
import UserPlaces from './places/pages/UserPlaces'
import Auth from './user/pages/Auth'
import MainNavigation from './shared/components/Navigation/MainNavigation'
import {AuthContext} from './shared/context/AuthContext'



const App = ()=> {

   const [isLoggedIn, setisLoggedIn] = useState(false)

   const login = useCallback(()=>{
      setisLoggedIn(true)
   }, [])

   const logout = useCallback(()=>{
      setisLoggedIn(false)
   }, [])


   let routes;

   if(isLoggedIn){
      routes=(
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
      )
   }
   else{
      routes=(
      <Switch>
            <Route path='/:userId/places' exact>
              <UserPlaces/>
           </Route>
           <Route path='/' exact>
              <Users/>
           </Route> 
           <Route path='/auth'>
              <Auth />
           </Route>
           <Redirect to="/auth"/>
      </Switch>
      )
   }

  return(
  <AuthContext.Provider value={{isLoggedIn:isLoggedIn, login:login, logout:logout}}>
  <BrowserRouter>
         <MainNavigation/>
         <main>
            {routes}
        </main>
    </BrowserRouter>
   </AuthContext.Provider>)

}

export default App;
