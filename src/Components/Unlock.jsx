import React from 'react'
import unlock from '../assets/unlock.png'
const Unlock = () => {
    return (
        <div className="achieve">
            <div className="achieve-image">
                <img src={unlock} alt="" />
            </div>
            <div className="achieve-content">
                <h2>Unlock your Trading Potential</h2>
                <p>Get exclusive access to AI-driven tools that can grow your portfolio for you</p>
                <button className='btn'>Apply Now</button>
            </div>
            <div className="blur"></div>
        </div>
    )
}

export default Unlock;