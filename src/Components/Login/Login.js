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
            console.log(res.data, 'hit')
            this.props.getUser(res.data)
            this.props.history.push('/Profile')
        })
        .catch(err => console.log(err))
    }

    handleRegister = () => {
        // const {email, password} = this.state;
        axios.post('/api/register', {username: this.state.username, email: this.state.email,  user_password: this.state.password}).then(res => {
            this.props.getUser(res.data)
            this.props.history.push('/Profile')
        })
        .catch(err => console.log(err));
    }
    
    render(){
        return(
            <div>
                <div className='carousel'>
                    <p className='page-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit consequuntur facilis eius consequatur. Sit ad praesentium alias inventore, excepturi accusamus quis, quae in saepe maiores obcaecati adipisci a magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit consequuntur facilis eius consequatur. Sit ad praesentium alias inventore, excepturi accusamus quis, quae in saepe maiores obcaecati adipisci a magnam</p>
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
                    <button onClick={this.handleLogin}>SIGN IN</button>
                    <br/>
                    <div className='login'>
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
                    <button onClick={this.handleRegister}>REGISTER</button>
                </div>
                <HomeMap />
            </div>
        )
    }
}

export default connect(null, {getUser})(Login);