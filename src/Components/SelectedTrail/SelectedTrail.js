import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getMarker} from '../../redux/mapReducer'
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
        const {user_id} = this.props.reducer.user
        const {userId} = this.props
        return(
            <div className="selectedTrail">
               <h1>SELECTED TRAIL</h1>
               {this.state.trail.map((el, i) => (
                   <div key={i}>
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
                   {user_id ?
                    (user_id === userId
                    ?
                    <button>EDIT</button>
                    :
                    null)
                    : null
                   }
               </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps, {getMarker})(selectedTrail);