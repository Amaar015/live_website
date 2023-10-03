import React, { useState } from 'react'
import start from '../assets/started.png'
import { FaUsers } from 'react-icons/fa';
import { RxRocket } from 'react-icons/rx'
import { LuCircleDashed } from 'react-icons/lu'
import { FcCheckmark } from 'react-icons/fc'
const Started = () => {
    const [show1, setshow1] = useState(false);
    const [show2, setshow2] = useState(false);
    const [show3, setshow3] = useState(false);
    return (
        <div className="started">
            <h3>Get started</h3>
            <div className="achieve">
                <div className="achieve-content">
                    <div className={show1 ? "start-box2" : "start-box"} onClick={() => setshow1(!show1)}>
                        <FaUsers className='i' />
                        <div className="start-text">
                            <h4>Submit membership <span>form</span></h4>
                            <p>Fill and submit your application and wait for approval</p>
                            <div className="line"></div>
                        </div>
                    </div>
                    <div className={show2 ? "start-box2" : "start-box"} onClick={() => setshow2(!show2)}>
                        <RxRocket className='i' />
                        <div className="start-text">
                            <h4>Submit membership <span>form</span></h4>
                            <p>Fill and submit your application and wait for approval</p>
                            <div className="line"></div>
                        </div>

                    </div>
                    <div className={show3 ? "start-box2" : "start-box"} onClick={() => setshow3(!show3)}>
                        <LuCircleDashed className='i' />
                        <div className="start-text">
                            <h4>Submit membership <span>form</span></h4>
                            <p>Fill and submit your application and wait for approval</p>
                            <div className="line"></div>
                        </div>
                    </div>


                </div>
                <div className="achieve-image">
                    <img src={start} alt="" />

                </div>
                <div className="blur">

                </div>

            </div>
        </div>
    )
}

export default Started