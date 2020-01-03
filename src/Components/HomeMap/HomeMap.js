import React, {Component} from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react'
require('dotenv').config();

const mapStyles = {
    width: '100%',
    height: '500px',
  };

class HomeMap extends Component {
    
    render(){
        return(
            <div>
                <Map
                    google={this.props.google}
                    zoom={11}
                    style={mapStyles}
                    initialCenter={{ lat: 46.8721, lng: -113.9940}}
                />
        </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
  })(HomeMap);