import React, {Component} from 'react';
import {Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react'
import {connect} from 'react-redux'
import {getMarker} from '../../redux/mapreducer'
import './sass/profileMap.scss'
import axios from 'axios';

const mapStyles = {
    width: '100%',
    height: '500px',
  };

class ProfileMap extends Component {
    constructor(){
        super();
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            locations: [],
            lat: 0, 
            lng: 0,
            trail_name: ''
        }
    }

    componentDidMount() {
        this.getAllMarkers()
        // console.log(this.state.locations)
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addMarker = () => {
        axios.post('./api/marker', {lat: this.state.lat, lng: this.state.lng, trail_name: this.state.trail_name}).then(res => {
            console.log(res.data, 'hit')
            this.props.getMarker(res.data)
        })
        this.getAllMarkers()
    }

    // deleteMarker = () => {
    //     console.log('hit')
    //     axios.delete(
    //       `/api/deletemarker/${this.state.selectedPlace.thisMarker.marker_id}`
    //     ).then(res => this.getAllMarkers());
    // }

    getAllMarkers = () => {
        axios.get('./api/getmarkers').then(res => this.setState({locations: res.data}))
        // console.log(this.state.locations)
    }

    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
    
    render(){
        // console.log(this.state.selectedPlace)
        return(
            <div className='profileMap'>
                <form className='profileMapForm'>
                    <input className='latlngInput'
                        type="text"
                        placeholder="     Latitude Dec.Deg"
                        name="lat"
                        onChange={(event) => this.handleInput(event)}/>
                    <input className='latlngInput'
                        type="text"
                        placeholder="     Longitude Dec.Deg"
                        name="lng"
                        onChange={(event) => this.handleInput(event)}/>
                    <input className='latlngInput'
                        type="text"
                        placeholder="     Trail Name"
                        name="trail_name"
                        onChange={(event) => this.handleInput(event)}/>
                    <button className="addMarkerButton" onClick={this.addMarker}>Add Marker</button>
                </form>
                <div className='map'>
                    <Map
                        google={this.props.google}
                        zoom={12}
                        style={mapStyles}
                        initialCenter={{ lat: 46.8721, lng: -113.9940}}
                    >
                        {/* <Marker
                            onClick={this.onMarkerClick}
                            name={<h2>Missoula</h2>}
                        /> */}
                        {this.state.locations.map( (el, index) => {
                             return <Marker
                                key = {`location: ${el}, ${index}`}
                                onClick={this.onMarkerClick}
                                name={<h2>{el.trail_name}</h2>}
                                thisMarker={el}
                                // position={{lat: 46.8791, lng: -113.9565}}
                                position={{lat: el.lat, lng: el.lng}} 
                            />
                        })
                    }
                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}
                            onClose={this.onClose}
                            >
                            <div>
                                <h4>{this.state.selectedPlace.name}</h4>
                            </div>
                                {/* <button type="button" onClick={() => this.deleteMarker()}>DELETE</button> */}
                        </InfoWindow>
                    </Map>
                </div>
        </div>
        )
    }
}

const WrappedContainer = GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
 })(ProfileMap);
 export default connect(null, {getMarker})(WrappedContainer);

// export default GoogleApiWrapper({
//     apiKey: process.env.REACT_APP_GOOGLE_API_KEY
//   })(ProfileMap);