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
        console.log(this.props)
        return(
            //html table css in app.css
            <div className="trailCard">
                <table>
                    {marker.length ? marker.map((el) => (
                        <div key = {el}>
                            <th>{el.trail_name}</th>
                            <tr>{`Latitude: ${el.lat}`}</tr>
                            <tr>{`Longitude: ${el.lng}`}</tr>
                        </div>
                    )) : null }
                </table>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps, {getMarker})(TrailCard);