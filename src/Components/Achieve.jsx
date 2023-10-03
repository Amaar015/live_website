import React from 'react'
import Achieves from '../assets/achieve.png'
const Achieve = () => {
    return (
        <div className="achieve">
            <div className="achieve-image">
                <img src={Achieves} alt="" />
            </div>
            <div className="achieve-content">
                <h2>Stocks, Options, Forex and Crypto</h2>
                <p>Don't limit yourself to one market, diversify your portfolio</p>
                <button className='btn'>View benefits</button>
            </div>
            <div className="blur"></div>
        </div>
    )
}

export default Achieve