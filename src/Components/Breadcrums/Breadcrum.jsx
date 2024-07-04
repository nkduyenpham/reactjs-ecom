import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadscrum_arrow.png'

const Breadscrum = (props) => {
    const { product } = props;
    return (
        <div className='breadscrum'>
            HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
        </div>
    )
}

export default Breadscrum