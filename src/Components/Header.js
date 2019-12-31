import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
        return(
            <div className='header'>
                <h1>TRAILHEAD</h1>
                <div>
                    <Link to='/'>Home</Link>
                    <Link to='/Profile'>Profile</Link>
                </div>
            </div>
        )
}

export default Header;