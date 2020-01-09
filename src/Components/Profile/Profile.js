import React from 'react';
import {connect} from 'react-redux';
import {Component} from 'react'
import {getUser} from '../../redux/reducer'
import ProfileMap from '../ProfileMap/ProfileMap'
import ProfileBackground from '../ProfileBackground/ProfileBackground'
import UserTrails from '../UserTrails/UserTrails'
import SelectedTrail from '../SelectedTrail/SelectedTrail'
import Axios from 'axios';
import './sass/profile.scss'

class Profile extends Component {
    constructor(){
        super();
        this.state = {
            profile_pic: '',
            bio: ''
        }
    }


    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handlePicClick = () => {
        Axios.put('api/profilepic', {profile_pic: this.state.profile_pic}).then(res => {
            this.props.getUser(res.data[0])
            // console.log(res.data, 'data, picclick')
        })
    }

    handleBioClick = () => {
        Axios.put('api/bio', {bio: this.state.bio}).then(res => {
            this.props.getUser(res.data[0])
            console.log(res.data, 'data, bioclick')
        })
    }
    
    render(){
        // console.log(this.props)
        return(
            <div>
                <ProfileBackground />
                <div className='boop'>
                    <form className='userCard'>
                        <div>
                            <img className='profilepic' src={this.props.reducer.user.profile_pic} alt=""/>
                            <div className='userInfo'><strong>{this.props.reducer.user.username}</strong></div>
                            <div className='userInfo'>{this.props.reducer.user.email}</div>
                            <div className='userInfo'>{this.props.reducer.user.bio}</div>
                        </div>
                        <input
                            className='input' 
                            type="text" 
                            placeholder='     Profile Pic URL'
                            name='profile_pic'
                            value={this.state.profile_pic}
                            onChange={(event) => this.handleInput(event)}/>
                        <button className='proButton' onClick={() => this.handlePicClick()}>ADD</button>
                        <input 
                            className='input'
                            type="text"
                            placeholder='     User Bio'
                            name='bio'
                            value={this.state.bio}
                            onChange={(event) => this.handleInput(event)}/>
                        <button className='proButton' onClick={() => this.handleBioClick()}>ADD</button>
                    </form>
                    <SelectedTrail />
                    <UserTrails className='proTrailList'/>
                </div>
                <div>
                    <ProfileMap />    
                </div>
            </div>    
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps, {getUser})(Profile);