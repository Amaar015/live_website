import React from 'react'
import about from '../assets/about.png'
import coin from '../assets/coin.png'
import logo1 from '../assets/l-1.png';
import logo2 from '../assets/l-2.png';
import logo3 from '../assets/l-3.png';
import logo4 from '../assets/l-4.png';
import logo5 from '../assets/l-5.png';
import logo6 from '../assets/l-6.png';
import logo7 from '../assets/l-7.png';
import logo8 from '../assets/l-8.png';
const About = () => {
    return (
        <div className="about">
            <div className="heading">
                <h2>Investing on auto-pilot</h2>
                <p>with Seamless Integration to your trading account</p>
            </div>
            <div className="about-detail">
                <div className="about-content">
                    <h3>Grow your portfolio with A.I</h3>
                    <p>We develop profitable algorithms to identify and exploit hidden
                        trading patterns in various capital markets. As a member, you
                        will have exclusive access to our trading bots.
                    </p>
                    <div className="btn">
                        Become a member
                    </div>
                </div>
                <div className="about-image">
                    <img src={about} alt="" />
                    <div className="trade">
                        <span>Trade with algo</span>
                        <span>+$792.00</span>
                    </div>
                    {/* <img src={coin} alt="" className="coin" />
                    <img src={coin} alt="" className="coin" />
                    <img src={coin} alt="" className="coin" />
                    <img src={coin} alt="" className="coin" />
                    <img src={coin} alt="" className="coin" /> */}

                </div>
            </div>

            <div className="about-integrated">
                <div className="integrated-head">
                    <div className='line'></div>
                    <p>Integrated with</p>
                    <div className='line'></div>
                </div>
                <div className="integrated-logo">
                    <div className="logo-box">
                        <img src={logo1} alt="" />
                    </div>
                    <div className="logo-box">
                        <img src={logo2} alt="" />
                    </div>
                    <div className="logo-box">
                        <img src={logo3} alt="" />
                    </div>
                    <div className="logo-box">
                        <img src={logo4} alt="" />
                    </div>
                    <div className="logo-box">
                        <img src={logo5} alt="" />
                    </div>
                    <div className="logo-box">
                        <img src={logo6} alt="" />
                    </div>
                    <div className="logo-box">
                        <img src={logo7} alt="" />
                    </div>
                    <div className="logo-box">
                        <img src={logo8} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About