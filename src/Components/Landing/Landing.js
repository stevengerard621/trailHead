import React, {Component} from 'react'
import HomeMap from '../HomeMap/HomeMap'
import TrailCard from '../TrailCard/TrailCard'
import SelectedTrail from '../SelectedTrail/SelectedTrail'
import './sass/landing.scss'

class Landing extends Component {
    state = {
        editing: false,
        id: 0
    }

    toggleEdit = () => {
        this.setState({
            editing: !this.state.editing
        })
    }

    setId = (id) => {
        this.setState({
            id
        })
    }
    
    render(){
        return(
            <div>
                <div className='carousel'>
                    <p className='page-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit consequuntur facilis eius consequatur. Sit ad praesentium alias inventore, excepturi accusamus quis, quae in saepe maiores obcaecati adipisci a magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit consequuntur facilis eius consequatur. Sit ad praesentium alias inventore, excepturi accusamus quis, quae in saepe maiores obcaecati adipisci a magnam</p>
                </div>
                <div className="componentRow">
                <TrailCard toggleEdit={this.toggleEdit} setId={this.setId}/>
                {this.state.editing ? <SelectedTrail toggleEdit={this.toggleEdit} id={this.state.id}/> : null}
                </div>
                <br/>
                <br/>
                <HomeMap />
            </div>
        )
    }
}

export default Landing;