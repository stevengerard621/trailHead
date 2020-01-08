import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getMarker } from '../../redux/mapReducer';
import axios from 'axios';
import './sass/trailCard.scss'


class TrailCard extends Component {

    componentDidMount(){
        this.getAllMarkers()
    }

    getAllMarkers = () => {
        axios.get('./api/getmarkers').then(res => this.props.getMarker(res.data))
    }



    render(){
        const {marker} = this.props.mapReducer
        // console.log(this.props.mapReducer.marker, 'hit boom')
        return(
            <div className="trailCard">
                <section >
                    {marker.length ? marker.map((el, i) => (
                        <div className="eachTrail" key = {i} id = {i}>
                            <h4><strong><u>{el.trail_name}</u></strong></h4>
                            <h6>{`Latitude: ${el.lat}`}</h6>
                            <h6>{`Longitude: ${el.lng}`}</h6>
                        </div>
                    )) : null }
                </section>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps, {getMarker})(TrailCard);