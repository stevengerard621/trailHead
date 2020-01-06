import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../redux/reducer';
import './sass/header.scss'

function Header(props){
    const logout = () => {
        axios.post('/api/logout').then(res => {
            props.logout()
        })
        .catch(err => console.log(err))
    }

        return(
            <div className='header'>
                <h1 className='logo'>TRAILHEAD</h1>
                {/* <h1>{props.user.username}</h1> */}
                {!props.reducer.user.username ? <nav className='nav'>
                    <Link className='links' to='/'>Home</Link>
                    <Link className='links' to='/Login'>Login/Register</Link>
                </nav>
                : <nav className='nav'>
                    <Link className='links' to='/'>Home</Link>
                    <Link className='links' to='/Profile'>Profile</Link>
                    <Link className='links' to='/' onClick={logout}>Logout</Link>
                </nav>}

            </div>
        )
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default withRouter(connect(mapStateToProps, {logout})(Header));