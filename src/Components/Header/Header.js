import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../redux/reducer';
import './sass/header.scss'
class Header extends Component{
    state = {
        dropMenu: false,
    }
    logout = () => {
        axios.post('/api/logout').then(res => {
            this.props.logout()
        })
        .catch(err => console.log(err))
    }
    dropMenuToggle = () => {
        this.setState({
            dropMenu: !this.state.dropMenu
        })
    }
    render(){
        return(
            <div className='header'>
                <Link className='links' to='/'><h1 className='logo'>TRAILHEAD</h1></Link>
                <nav className='nav'>
                    <div className='bigMenu'>
                        {this.props.reducer.user.username ?
                        <div>
                            <Link className='links' to='/Profile'><img className='navProPic' src={this.props.reducer.user.profile_pic} alt=''/></Link>
                            <Link className='links' to='/'>Home</Link>
                            <Link className='links' to='/About'>About</Link>
                            <Link className='links' to='/' onClick={this.logout}>Logout</Link>
                        </div>
                        :
                        <div>
                            <Link className='links' to='/'>Home</Link>
                            <Link className='links' to='/About'>About</Link>
                            <Link className='links' to='/Login'>Login/Register</Link>
                        </div>
                        }
                    </div>
                    <nav className='hamburger' onClick = {()=>{this.dropMenuToggle()}}></nav>
                </nav>
                {this.state.dropMenu ?
                    <div id='dropdown-nav'>
                        {this.props.reducer.user.username ?
                    <div>
                        <Link className='dropLinks' to='/Profile'><img className='navProPic' src={this.props.reducer.user.profile_pic} alt=''/></Link>
                        <Link className='dropLinks' to='/'>Home</Link>
                        <Link className='dropLinks' to='/About'>About</Link>
                        <Link className='dropLinks' to='/' onClick={this.logout}>Logout</Link>
                    </div>
                :
                    <div>
                        <Link className='dropLinks' to='/'>Home</Link>
                        <Link className='dropLinks' to='/About'>About</Link>
                        <Link className='dropLinks' to='/Login'>Login/Register</Link>
                    </div>
                }
                    </div>
                :null}
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
} 

export default withRouter(connect(mapStateToProps, {logout})(Header));