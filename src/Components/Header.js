import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
        return(
            <div className='header'>
                <h1 className='logo'>TRAILHEAD</h1>
                <div className='nav'>
                    <Link className='links' to='/'>Home</Link>
                    <Link className='links' to='/Login'>Login</Link>
                </div>
            </div>
        )
}

export default Header;