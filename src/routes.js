import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing';
import Profile from './Components/Profile';
import Login from './Components/Login';



export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/Profile' component={Profile}/>
        <Route path='/Login' component={Login}/>
    </Switch>
)