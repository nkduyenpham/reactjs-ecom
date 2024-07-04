import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div className='newsletter'>
            <h1>Get Exclusive Offer To Your Email</h1>
            <p>Subscribe to our newsletter to stay update</p>
            <div>
                <input type="email" placeholder='Input your email' />
                <button>Subcribe</button>
            </div>
        </div>
    )
}

export default NewsLetter