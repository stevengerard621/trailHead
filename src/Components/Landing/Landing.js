import React, {Component} from 'react'
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
                <div className="componentRow">
                    <TrailCard toggleEdit={this.toggleEdit} setId={this.setId}/>
                    {this.state.editing ? <SelectedTrail toggleEdit={this.toggleEdit} id={this.state.id}/> : <div className='fillerComponent'></div>}
                </div>
                <h3 className='addMarkerInfo'>
                If you would like to add a Trailhead please login or register</h3>
                <br/>
                <br/>
                <HomeMap />
            </div>
        )
    }
}

export default Landing;