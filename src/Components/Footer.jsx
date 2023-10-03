import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className="footer">
            <div className="subscribe">
                <img src={logo} alt="" />
                <ul>
                    <li><Link>Browse</Link></li>
                    <li><Link>Features</Link></li>
                    <li><Link>Preminum</Link></li>
                    <li><Link>Services</Link></li>
                </ul>
                <div className="input-email">
                    <input type="email" name="email" id="email" placeholder='Your mail' />
                    <button className='btn1'>Subscribe</button>
                </div>
            </div>
            <div className="line-footer"></div>
            <div className="right">
                <p>&copy; 2023 Entr, Inc. All rights reserved.</p>
            </div>
            {/* <div className="blur"></div> */}
        </div>
    )
}

export default Footer