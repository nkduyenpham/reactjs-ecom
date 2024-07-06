import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div className='newsletter'>
            <h1>DISCOUNT UPTO 79%</h1>
            <p>And more promotion for your first order via our newsletter</p>
            <div>
                <input type="email" placeholder='Input your email' />
                <button>Subcribe</button>
            </div>
        </div>
    )
}

export default NewsLetter