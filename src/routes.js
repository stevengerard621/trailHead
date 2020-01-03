import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Profile from './Components/Profile/Profile';
import Login from './Components/Login/Login';



export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/Profile' component={Profile}/>
        <Route path='/Login' component={Login}/>
    </Switch>
)