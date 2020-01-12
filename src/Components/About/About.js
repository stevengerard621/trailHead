import React, {useState, useEffect} from 'react';
import Stripe from '../Stripe'
// import StripeCheckout from 'react-stripe-checkout';
// import axios from 'axios'
import './sass/about.scss'


function About () {
    const [amount, setAmount] = useState(0)
    useEffect(() => {
        // console.log('amount useEffect invoked')
    }, [amount])

        return(
            <div  className='about'>
               <h1 className='title'>
                   <strong>
                       ABOUT
                    </strong>
                </h1>
                <h2 className='subTitle'>WHO IS TRAILHEAD FOR?</h2>
                    <p className='whatsUpWithIt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Eget duis at tellus at urna condimentum mattis pellentesque. Netus et malesuada fames ac turpis. Porta non pulvinar neque laoreet suspendisse interdum. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Et netus et malesuada fames ac turpis egestas sed. Viverra nibh cras pulvinar mattis nunc sed. Nec feugiat in fermentum posuere urna nec tincidunt. Tempor orci dapibus ultrices in. In est ante in nibh mauris cursus mattis molestie a. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Lobortis elementum nibh tellus molestie nunc.
                </p>
                <h2>
                    <strong>
                        WOULD YOU LIKE TO DONATE?
                    </strong>
                </h2>
                <div >
                    <input className='donateInput' onChange={(e) => setAmount(e.target.value)} placeholder="    DONATE AMOUNT" type="number"/>
                    <Stripe amount={amount}/>
                </div>
                <h2 className='hideText'>
                    <strong>
                        WOULD YOU LIKE TO DONATE?
                    </strong>
                </h2>
                <br/>
            </div>
        )
}

export default About;