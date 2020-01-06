import React, {Component} from 'react';
import {Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react'
import axios from 'axios';

const mapStyles = {
    width: '100%',
    height: '500px',
  };

class HomeMap extends Component {
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
        return(
            <div>
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
                        {this.state.locations.map( (el) => {
                             return <Marker
                                onClick={this.onMarkerClick}
                                name={<h2>{el.trail_name}</h2>}
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
                        </InfoWindow>
                    </Map>
        </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
  })(HomeMap);