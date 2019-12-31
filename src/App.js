import React from 'react';
// import {withRouter} from 'react-router-dom';
import Header from './Components/Header'
import routes from './routes'
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      {routes}
    </div>
  );
}

export default App;
