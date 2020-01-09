import React, {Component} from 'react'
import axios from 'axios'
import './sass/userTrails.scss'

class UserTrails extends Component {
    state = {
        userTrails: []
    }

    componentDidMount(){
        this.getUserTrails()
    }

    getUserTrails = () => {
        axios.get('/api/usertrails').then(res => (
            this.setState({
                userTrails: res.data
            })
        ))
    }

    deleteMarker = (id) => {
        // console.log(this.props.mapReducer.marker[e.target.id])
        axios.delete(
          `/api/deletemarker/${id}`
        ).then(res => this.getUserTrails());
    }
    
    render(){
        const {userTrails} = this.state
        return(
            <section className="userTrails">
                {userTrails.length ? userTrails.map((el, i) => (
                    <div className="eachUserTrail" key = {i} id = {i}>
                        <h4 className="userTrailName"
                            onClick={() => {
                            this.props.toggleEdit()
                            this.props.setUserTrailId(el.marker_id, el.user_id)
                            }}><strong><u>{el.trail_name}</u></strong></h4>
                        <h6>{`Latitude: ${el.lat}`}</h6>
                        <h6>{`Longitude: ${el.lng}`}</h6>
                        <div>
                            <button className="userTrailButton" type="button" onClick={() => this.deleteMarker(el.marker_id)}>DELETE</button>
                        </div>
                    </div>
            )) : null }
        </section>
        )
    }
}

export default UserTrails;