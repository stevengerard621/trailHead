import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from '../redux/reducer'
import HomeMap from './HomeMap';
// import {Map, GoogleApiWrapper} from 'google-maps-react';
// require('dotenv').config();

// const mapStyles = {
//     width: '100%',
//     height: '500px',
//   };

class Login extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleLogin = () => {
        axios.post('./api/login', {email: this.state.email,  user_password: this.state.password}).then(res => {
            console.log(res.data, 'hit')
            this.props.getUser(res.data)
            this.props.history.push('/Profile')
        })
        .catch(err => console.log(err))
    }
    
    render(){
        return(
            <div>
                <div className='carousel'>
                    <p className='page-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit consequuntur facilis eius consequatur. Sit ad praesentium alias inventore, excepturi accusamus quis, quae in saepe maiores obcaecati adipisci a magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit consequuntur facilis eius consequatur. Sit ad praesentium alias inventore, excepturi accusamus quis, quae in saepe maiores obcaecati adipisci a magnam</p>
                    <br/>
                    <br/>
                    <div className='login'>
                        <input  type="text" 
                                placeholder="EMAIL"
                                name='email'
                                onChange={(event) => this.handleInput(event)}/>
                        <input type="password" 
                                placeholder="PASSWORD"
                                name='password'
                                onChange={(event) => this.handleInput(event)}/>
                    </div>
                    <br/>
                    <div>
                        <button onClick={this.handleLogin}>SIGN IN</button>
                    </div>
                </div>
                <HomeMap />
                {/* <div className='map'>
                    <Map
                        google={this.props.google}
                        zoom={11}
                        defaultOptions={{
                         mapTypeId: 'terrain',  
                        }}
                        style={mapStyles}
                        initialCenter={{ lat: 46.8721, lng: -113.9940}}
                    />
                </div> */}
            </div>
        )
    }
}

export default connect(null, {getUser})(Login);

// const WrappedLogin = GoogleApiWrapper({
//     apiKey: process.env.REACT_APP_GOOGLE_API_KEY
//  })(Login);
//  export default connect(null, {getUser})(WrappedLogin);

// export default connect(null, {getUser}),GoogleApiWrapper({
//     apiKey: process.env.REACT_APP_GOOGLE_API_KEY
//   })(Login);