import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const CheckoutForm = () => {

    const { resetCart, cartItems } = useContext(ShopContext);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        paymentMethod: 'creditCard',
    });

    const [showThankYou, setShowThankYou] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(preState => ({
            ...preState,
            [name]: value
        }));
    };

    const isCartNull = Object.values(cartItems).every(value => value === 0)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // reset form after submit
        setFormData({
            fullName: '',
            email: '',
            address: '',
            paymentMethod: 'creditCard',
        });
        if (!isCartNull) {
            setShowThankYou(true);
            resetCart();
        }
    }

    return (
        <div className='checkout-form' >
            <form onSubmit={handleSubmit}>
                <div className='form-container'>
                    <h2>Contact Information</h2>
                    <label htmlFor="fullName">Full Name: </label>
                    <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    <label htmlFor="address">Shipping Address: </label>
                    <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
                </div>
                <div className="paypment-method">
                    <label>Payment Method: </label>
                    <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
                        <option value="creditCard">Credit Card</option>
                        <option value="debitCard">Debit Card</option>
                        <option value="paypal">PayPal</option>
                    </select>
                </div>
                <div className='placeorder-button'>
                    <button type="submit">PLACE ORDER</button>
                </div>
            </form>

            {showThankYou && (
                <div className="thank-you-popup">
                    <div className="thank-you-content">
                        <h2>Thank you for shopping with us!</h2>
                        <p>Your order has been successfully placed.</p>
                        <Link to="/"><button>Back to Main Page</button></Link>
                    </div>
                </div>
            )}
        </div >
    )
}

export default CheckoutForm