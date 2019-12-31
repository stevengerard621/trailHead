import React, {Component} from 'react'
import HomeMap from './HomeMap'
// import {Map, GoogleApiWrapper} from 'google-maps-react'
// require('dotenv').config();

class Landing extends Component {
    
    render(){
        return(
            <div>
                <div className='carousel'>
                    <p className='page-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit consequuntur facilis eius consequatur. Sit ad praesentium alias inventore, excepturi accusamus quis, quae in saepe maiores obcaecati adipisci a magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit consequuntur facilis eius consequatur. Sit ad praesentium alias inventore, excepturi accusamus quis, quae in saepe maiores obcaecati adipisci a magnam</p>
                </div>
                <HomeMap />
            </div>
        )
    }
}

// export default GoogleApiWrapper({
//     apiKey: process.env.REACT_APP_GOOGLE_API_KEY
//   })(Landing);

export default Landing;