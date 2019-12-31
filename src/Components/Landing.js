import React from 'react'
import {Component} from 'react'
import {Map, GoogleApiWrapper} from 'google-maps-react'

const REACT_APP_GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

const mapStyles = {
    width: '100%',
    height: '500px',
  };

class Landing extends Component {
    
    render(){
        return(
            <div>
                <h1>Home</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit consequuntur facilis eius consequatur. Sit ad praesentium alias inventore, excepturi accusamus quis, quae in saepe maiores obcaecati adipisci a magnam.</p>
                <div>
                    <Map
                        google={this.props.google}
                        zoom={11}
                        defaultOptions={{
                         mapTypeId: 'terrain',  
                        }}
                        style={mapStyles}
                        initialCenter={{ lat: 46.8721, lng: -113.9940}}
                    />
                </div>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: REACT_APP_GOOGLE_API_KEY
  })(Landing);