import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
// import {withRouter} from 'react-router-dom'
import HomeMap from '../HomeMap/HomeMap'
import TrailCard from '../TrailCard/TrailCard'
import SelectedTrail from '../SelectedTrail/SelectedTrail'
import './sass/landing.scss'

class Landing extends Component {
    state = {
        editing: false,
        id: 0
    }

    toggleEdit = () => {
        this.setState({
            editing: !this.state.editing
        })
    }

    setId = (id) => {
        this.setState({
            id
        })
    }
    
    render(){
        return(
            <div>
                <div className='carousel'>
                    <p className='page-description'></p>
                </div>
                <div className='textCenter'>
                    <h1 className='welcome'>WELCOME</h1>
                    <h3 className='welcomeText'>
                    Trailhead is a website dedicated to sharing trail locations for hiking, running, and biking. Users have the ability to look for trail access all over the world. If you would like to add any trails you simply need to login, enter the coordinates and add a trail name.  Happy hiking!
                    </h3>
                </div>
                <div className="componentRow">
                    <TrailCard toggleEdit={this.toggleEdit} setId={this.setId}/>
                    {this.state.editing ? <SelectedTrail toggleEdit={this.toggleEdit} id={this.state.id}/> : <div className='fillerComponent'></div>}
                </div>
                <h3 className='addMarkerInfo'>
                If you would like to add a Trailhead please login or register. Otherwise take a look around for the start to your next adventure!
                </h3>
                <br/>
                <br/>
                <HomeMap />
            </div>
        )
    }
}

export default Landing;