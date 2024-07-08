import React from 'react'
import CheckoutItem from '../Components/Checkout/CheckoutItem'
import CheckoutForm from '../Components/Checkout/CheckoutForm'
import './Styles/Checkout.css'

const Checkout = () => {
    return (
        <div className='checkout'>
            <h1>CHECKOUT</h1>
            <div className='checkout-container'>
                <CheckoutItem />
                <CheckoutForm />
            </div>
        </div>
    )
}

export default Checkout