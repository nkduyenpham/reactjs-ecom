import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
    return (
        <div className='offers'>
            <div className="offers-left">
                <h2>EXPLORE TODAY FOR 39% OFF</h2>
                <p>ON BEST SELLER PRODUCTS</p>
                <button>Check Now</button>
            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt="" />
            </div>
        </div>
    )
}

export default Offers