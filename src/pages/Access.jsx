import React, { useState } from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import CustomPopup from '../Components/Popup';

const Access = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <>
            <Navbar />
            <div className="get-access">
                <h1>Become a member</h1>
                <p>Our membership is open to traders of all levels of experience,
                    from beginners to seasoned professionals.
                    We welcome anyone who is looking to improve their
                    trading skills, gain access to powefull trading tools and resources,
                    and connect with like minded individuals in our community. Apply for membership today
                    and start taking advantage of all that we offer.
                </p>
                <div className="timeline">
                    <div className="timeline-box">
                        <h3>Step 1</h3>
                        <p>Apply for membership</p>
                    </div>
                    <div className="timeline-box">
                        <h3>Step 2</h3>
                        <p>Submit you application and wait on approval</p>
                    </div>
                    <div className="timeline-box">
                        <h3>Step 3</h3>
                        <p>Create your account and start trade</p>
                    </div>
                </div>


                <button className='btn' onClick={togglePopup}>
                    Apply Now
                </button>
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


            <Footer />
        </>
    )
}

export default Access