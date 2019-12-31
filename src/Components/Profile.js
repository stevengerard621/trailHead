import React from 'react';
import {connect} from 'react-redux';
import {Component} from 'react'

class Profile extends Component {
    
    render(){
        return(
            <div className='profile'>
                <h1>{this.props.user.username}</h1>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps, null)(Profile);