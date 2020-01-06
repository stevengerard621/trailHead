import React from 'react';
import {withRouter} from 'react-router-dom';
import Header from './Components/Header/Header'
import routes from './routes'
import Axios from 'axios'
import {useEffect} from 'react'
import {getUser} from './redux/reducer'
import {connect} from 'react-redux'
import './App.css';

function App(props) {
  useEffect(() => {
    // console.log('useeffect hit')
    Axios.get('api/currentuser')
    .then((res) => {
      props.getUser(res.data)
    })
  },[props])
  return (
    <div>
      <Header/>
      {routes}
    </div>
  );
}

export default withRouter(connect(null, {getUser})(App));
