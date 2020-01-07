import React, {Component} from 'react'
import HomeMap from '../HomeMap/HomeMap'
import TrailCard from '../TrailCard/TrailCard'
import './sass/landing.scss'

class Landing extends Component {
    
    render(){
        return(
            <div>
                <div className='carousel'>
                    <p className='page-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit consequuntur facilis eius consequatur. Sit ad praesentium alias inventore, excepturi accusamus quis, quae in saepe maiores obcaecati adipisci a magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit consequuntur facilis eius consequatur. Sit ad praesentium alias inventore, excepturi accusamus quis, quae in saepe maiores obcaecati adipisci a magnam</p>
                </div>
                <TrailCard />
                <br/>
                <br/>
                <HomeMap />
            </div>
        )
    }
}

export default Landing;