import React, {useState, useEffect} from 'react';
// import StripeCheckout from 'react-stripe-checkout';
// import axios from 'axios'
import './sass/about.scss'


function About () {
    const [amount, setAmount] = useState(0)
    useEffect(() => {
        // console.log('amount useEffect invoked')
    }, [amount])

    // onOpened = () => {
    //     console.log('this is opened')
    //   }
    
    //   onClosed = () => {
    //     console.log('this is closed')
    //   }
    
    //   onToken = (token) => {
    //     console.log(token)
    //     let { amount } = this.state
    //     amount /= 100
    //     console.log(amount)
    //     token.card = void 0
    //     axios.post('/api/payment', { token, amount: this.state.amount }).then(res => {
    //       console.log(res)
    //       alert(`Congratulations you've paid ${amount}!`)
    //     })
    //   }
        return(
            <div  className='about'>
               <h1 className='title'>
                   <strong>
                       <u>ABOUT</u>
                    </strong>
                </h1>
                <h2 className='subTitle'>WHO IS TRAILHEAD FOR?</h2>
                    <p className='whatsUpWithIt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Eget duis at tellus at urna condimentum mattis pellentesque. Netus et malesuada fames ac turpis. Porta non pulvinar neque laoreet suspendisse interdum. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Et netus et malesuada fames ac turpis egestas sed. Viverra nibh cras pulvinar mattis nunc sed. Nec feugiat in fermentum posuere urna nec tincidunt. Tempor orci dapibus ultrices in. In est ante in nibh mauris cursus mattis molestie a. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Lobortis elementum nibh tellus molestie nunc.
                </p>
                <br/>
                <h2>
                    <strong>
                        WOULD YOU LIKE TO DONATE?
                    </strong>
                </h2>
                <input onChange={(e) => setAmount(e.target.value)} placeholder="DONATE AMOUNT" type="number"/>
                <br/>
                
                {/* <div style={{display:'flex',flexDirection:'column', alignItems:'center', marginTop:'50px'}}>
                    <StripeCheckout
                    name='Class' //header
                    image={imageUrl}
                    description='This is stuff going beneath the header' //subtitle - beneath header
                    stripeKey={process.env.REACT_APP_STRIPE_KEY} //public key not secret key
                    token={this.onToken} //fires the call back
                    amount={this.state.amount} //this will be in cents
                    currency="USD" 
                    // image={imageUrl} // the pop-in header image (default none)
                    // ComponentClass="div" //initial default button styling on block scope (defaults to span)
                    panelLabel="Submit Payment" //text on the submit button
                    locale="en" //locale or language (e.g. en=english, fr=french, zh=chinese)
                    opened={this.onOpened} //fires cb when stripe is opened
                    closed={this.onClosed} //fires cb when stripe is closed
                    allowRememberMe // "Remember Me" option (default true)
                    billingAddress={false}
                    // shippingAddress //you can collect their address
                    zipCode={false}
                    >
                    {/* <button>Checkout</button> */
                    /* </StripeCheckout> */
                /* //     <input value={this.state.amount} */
                //     type='number'
                //     onChange={e=>setAmount({amount:+e.target.value})}/>
                // </div> */}}
            }
            </div>
        )
}

export default About;