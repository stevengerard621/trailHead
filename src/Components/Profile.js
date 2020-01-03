import React from 'react';
import {connect} from 'react-redux';
import {Component} from 'react'
import ProfileMap from './ProfileMap'
import Axios from 'axios';
// import axios from 'axios'

class Profile extends Component {
    constructor(){
        super();
        this.state = {
            profile_pic: ''
        }
    }

    // componentDidUpdate(prevProps, prevState){
    //     if(prevProps !== this.props){
    //         console.log('cdu')
    //     }
    // }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handlePicClick = () => {
        Axios.put('api/profilepic', {profile_pic: this.state.profile_pic}).then(res => {
            
            console.log(res.data)
        })
    }
    
    render(){
        console.log(this.props)
        return(
            <div>
                <div className='profile'>
                    <h1>{this.props.user.username}</h1>
                    <h1>{this.props.user.email}</h1>
                    <img className='profilepic' src={this.props.user.profile_pic} alt=""/>
                    <input type="text" 
                        placeholder='Profile Pic URL'
                        name='profile_pic'
                        value={this.state.profile_pic}
                        onChange={(event) => this.handleInput(event)}/>
                    <button onClick={() => this.handlePicClick()}>ADD</button>
                </div>
                <br/>
                <br/>
                    <ProfileMap />    
                {/* <div>
                    <input type="text" 
                           placeholder='Latitude'
                           name='lat'/>
                    <input type="text" 
                           placeholder='Longitude'
                           name='long'/>
                    <button>ADD MARKER</button>
                </div> */}
            </div>    
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps, null)(Profile);