import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getMarker } from '../../redux/mapreducer';
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
                {/* <h2>TRAILHEAD</h2> */}
                <section className="tcScroll">
                    {marker.length ? marker.map((el, i) => (
                        <div className="eachTrail" key = {i} id = {i}>
                            <h4 className="eachTrailName"
                                onClick={() => {
                                this.props.toggleEdit()
                                this.props.setId(el.marker_id)
                            }}><strong><u>{el.trail_name}</u></strong></h4>
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