import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import graph from './../assets/home.png'
import About from '../Components/About'
import Achieve from '../Components/Achieve'
import Member from '../Components/Member'
import Unlock from '../Components/Unlock'
import Started from '../Components/Started'
import Footer from '../Components/Footer'
import CustomPopup from '../Components/Popup'
export const Home = () => {

    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <>
            <Navbar />
            <div className="home">
                <div className="home-content">
                    <button className='btn'>Members only</button>

                    <h2>Trading Algorithms <br /> for the modern world </h2>
                    <p>Trade better with AI</p>
                    <div className="buttons">
                        <button className='btn'>Explore marketplace</button>
                        <button onClick={togglePopup} className='btn'>Apply now</button>
                        <CustomPopup
                            show={showPopup}
                            handleClose={togglePopup}
                        >
                            <h3>Get Early Access</h3>
                            <p>We are launching soon, <br /> subscribe to get on the waitlist</p>
                            <div className="popup-input">
                                <input type="email" placeholder='Your email' />
                                <button className='btn'>Subscribe</button>
                            </div>
                        </CustomPopup>
                    </div>
                </div>
                <div className="home-image">
                    <img src={graph} alt="" />
                </div>
            </div >
            <About />
            <Achieve />
            <Member />
            <Unlock />
            <Started />
            <Footer />
        </>
    )
}
