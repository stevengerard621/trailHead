import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getMarker } from '../redux/mapReducer';
import axios from 'axios';



class TrailCard extends Component {

    componentDidMount(){
        this.getAllMarkers()
    }

    getAllMarkers = () => {
        axios.get('./api/getmarkers').then(res => this.props.getMarker(res.data))
    }


    render(){
        const {marker} = this.props.mapReducer
        console.log(this.props)
        return(
            <div>
                {marker.length ? marker.map(el => (
                <div><h1>{el.trail_name}</h1>
                <h3>{el.lat}</h3></div>
        )) : null }
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps, {getMarker})(TrailCard);