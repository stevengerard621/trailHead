import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

class Stripe extends Component {
    constructor() {
        super()
        this.state = {
          amount: 0
        }
      }

      onOpened=()=>{
        console.log('this is opened')
      }
    
      onClosed=()=>{
        console.log('this is closed')
      }
    
      onToken = (token) => {
        console.log(token)
        let { amount } = this.props
        // amount /= 100
        console.log(amount)
        token.card = void 0
        axios.post('/api/payment', { token, amount: this.props.amount * 100 }).then(res => {
          console.log(res)
          alert(`Thanks for your donation of ${amount}!`)
        })
      }
    
      render() {
        // console.log(typeof this.state.amount)
    
        return (
          <div style={{display:'flex',flexDirection:'column', alignItems:'center', marginTop:'50px'}}>
            <StripeCheckout
              name='TRAILHEAD' //header
              description='Donation Station' //subtitle - beneath header
              stripeKey={process.env.REACT_APP_STRIPE_KEY} //public key not secret key
              token={this.onToken} //fires the call back
              amount={this.props.amount * 100} //this will be in cents
              currency="USD" 
              panelLabel="Submit Payment"
              locale="en"
              opened={this.onOpened} //fires cb when stripe is opened
              closed={this.onClosed} //fires cb when stripe is closed
              allowRememberMe // "Remember Me" option (default true)
              billingAddress={false}
              zipCode={false}
            >
              {/* <button>Checkout</button> */}
            </StripeCheckout>
            {/* <input value={this.state.amount} */}
            {/* type='number'
            onChange={e=>this.setState({amount:+e.target.value})}/> */}
          </div>
        )
      }
    }

export default Stripe;