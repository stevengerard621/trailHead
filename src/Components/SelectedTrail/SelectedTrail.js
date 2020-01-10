import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getMarker} from '../../redux/mapreducer'
import axios from 'axios'
import './sass/selectedTrail.scss'


class selectedTrail extends Component {
    state = {
        trail: [],
        editBtn: false,
        editInput: false,
        description: '',
        distance: 0,
        gain: 0,
        loss: 0
    }

    componentDidMount(){
        this.getTrail()
    }

    getTrail = () => {
        // console.log(this.props.mapreducer.marker[e.target.id])
        axios.get(
          `/api/trail/${this.props.id}`
          ).then(res => this.setState({
              trail: res.data
            }));
    }

    toggleEditInput = () => {
        this.setState({
            editInput: !this.state.editInput
        })
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addTrailInfo = () => {
        axios.put(`/api/trailinfo/${this.props.id}`, {
            description: this.state.description, 
            distance: this.state.distance, 
            gain: this.state.gain, 
            loss: this.state.loss
        }).then(res => this.getTrail())
    }
    
    render(){
        const {user_id} = this.props.reducer.user
        const {userId} = this.props
        return(
            <div className="selectedTrail">
               {/* <h1>SELECTED TRAIL</h1> */}
               {this.state.trail.map((el, i) => (
                   <div key={i}>
                       <h2><u>{el.trail_name}</u></h2>
                       <h5>
                           <u>DESCRIPTION</u>
                           <p>{el.description}</p>
                       </h5>
                       <h5>
                           <u>DISTANCE</u>
                           <p>{el.distance} Miles</p>
                        </h5>
                       <h5>
                           <u>GAIN</u>
                           <p>Gain: {el.gain}'</p>
                        </h5>
                       <h5>
                           <u>LOSS</u>
                           <p>Loss: {el.loss}'</p>
                        </h5>
                       {this.state.editInput
                        ?
                        <div>
                            <input onChange={(event) => this.handleInput(event)} placeholder="DESCRIPTION" name='description' type="text"/>
                            <input onChange={(event) => this.handleInput(event)} placeholder="DISTANCE" name='distance' type="number"/>
                            <input onChange={(event) => this.handleInput(event)} placeholder="GAIN" name='gain' type="number"/>
                            <input onChange={(event) => this.handleInput(event)} placeholder="LOSS" name='loss' type="number"/>
                            <button className="selectedTrailButtons" onClick={this.addTrailInfo}>SAVE</button>
                        </div>
                        :
                        null
                       }
                   </div>
               ))}
               <div>
                   <button className="selectedTrailButtons" onClick={this.props.toggleEdit}>Close</button>
                   {user_id ?
                    (user_id === userId
                    ?
                    <button className="selectedTrailButtons" onClick={() => this.toggleEditInput()}>EDIT</button>
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