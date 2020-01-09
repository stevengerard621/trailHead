import React, {Component} from 'react'
import axios from 'axios'
import './sass/selectedTrail.scss'


class selectedTrail extends Component {
    state = {
        trail: []
    }

    componentDidMount(){
        this.getTrail()
    }

    getTrail = () => {
        // console.log(this.props.mapReducer.marker[e.target.id])
        axios.get(
          `/api/trail/${this.props.id}`
          ).then(res => this.setState({
              trail: res.data
            }));
    }
    
    render(){
        // const {trail} = this.state
        return(
            <div className="selectedTrail">
               <h1>SELECTED TRAIL</h1>
               {this.state.trail.map((el, i) => (
                   <div>
                       <h3><u>{el.trail_name}</u></h3>
                       <h5>
                           <u>DESCRIPTION</u>
                           <p>{el.description}</p>
                       </h5>
                       <h5>{el.distance} Miles</h5>
                       <h5>Gain: {el.gain}'</h5>
                       <h5>Loss: {el.loss}'</h5>
                   </div>
               ))}
               <div>
                   <button onClick={this.props.toggleEdit}>Close</button>
               </div>
            </div>
        )
    }
}

export default selectedTrail;