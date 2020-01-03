import React, {Component} from 'react';
import {Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react'
require('dotenv').config();

const mapStyles = {
    width: '100%',
    height: '500px',
  };

class ProfileMap extends Component {
    constructor(){
        super();
        this.state = {
            locations: [
                {
                    lat: 46.8721, 
                    lng: -113.9940,
                    name: 'jumbo'
                }
            ]
        }
    }

    //function that stores data on state
    // addMarker(props){
    //     var marker = new props.google.maps.Marker({
    //         position: props.coords,
    //         // map: map,
    //         // icon: props.iconImage
    //       })
    //     console.log(props)


    // }
    
    render(){
        return(
            <div>
                <Map
                    google={this.props.google}
                    zoom={11}
                    style={mapStyles}
                    initialCenter={{ lat: 46.8721, lng: -113.9940}}
                    onClick={(e) => this.addMarker(e)}
                >
                    <Marker>
                        name={'Jumbo'}
                        position={{lat: 46.8791, lng: -113.9565}}
                    </Marker>
                    <InfoWindow
                        // marker={this.state.activeMarker}
                        // visible={this.state.showingInfoWindow}
                        // onClose={this.onClose}
                        >
                        <div>
                            {/* <h4>{this.state.selectedPlace.name}</h4> */}
                        </div>
                    </InfoWindow>
                </Map>
        </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
  })(ProfileMap);