import React from 'react'
import './Styles/LoginSignup.css'

const LoginSignup = () => {
    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder='Your name' />
                    <input type="email" placeholder='Email address' />
                    <input type="password" placeholder='Password' />
                </div>
                <div className='loginsignup-button'>
                    <button>Continue</button>
                </div>
                <p className="loginsignup-login">Already have an account ? <span>Login here</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>By continuing, i agree to the terms of use & privacy.</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup