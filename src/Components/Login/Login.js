import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from '../../redux/reducer'
import HomeMap from '../HomeMap/HomeMap';
import './sass/login.scss'

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
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
            // console.log(res.data, 'hit')
            this.props.getUser(res.data)
            this.props.history.push('/Profile')
        })
        .catch(err => console.log(err))
    }

    handleRegister = () => {
        // const {email, password} = this.state;
        axios.post('/api/register', {username: this.state.username, email: this.state.email,  user_password: this.state.password}).then(res => {
            console.log(res.data)
            this.props.getUser(res.data)
            this.props.history.push('/Profile')
        })
        .catch(err => console.log(err));
    }
    
    render(){
        return(
            <div>
                <div className='carousel'>
                    {/* <div className='loginContainer'> */}
                    <p className='login_description'></p>
                    <br/>
                    <br/>
                    <div className='login'>
                        <input  className='loginInput'
                                type="text" 
                                placeholder="    EMAIL"
                                name='email'
                                onChange={(event) => this.handleInput(event)}
                                // value={this.state.email}
                                />
                        <input className='loginInput'
                                type="password" 
                                placeholder="    PASSWORD"
                                name='password'
                                onChange={(event) => this.handleInput(event)}/>
                    </div>
                    <br/>
                    <button className='loginBtn' onClick={this.handleLogin}>SIGN IN</button>
                    <br/>
                    <div className='register'>
                        <input 
                            className='loginInput'
                            maxLength='100'
                            placeholder='     USERNAME'
                            name='username'
                            onChange={(event) => this.handleInput(event)}/>
                        <input 
                            className='loginInput'
                            maxLength='100'
                            placeholder='     EMAIL'
                            name='email'
                            onChange={(event) => this.handleInput(event)}/>
                        <input
                            className='loginInput'
                            type='password' 
                            maxLength='20'
                            placeholder='     PASSWORD'
                            name='password'
                            onChange={(event) => this.handleInput(event)}/>
                    </div> 
                    <br/>   
                    <button className='loginBtn' onClick={this.handleRegister}>REGISTER</button>
                    {/* </div> */}
                </div>
                <HomeMap />
            </div>
        )
    }
}

export default connect(null, {getUser})(Login);