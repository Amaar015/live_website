import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { AiOutlineBars } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'
import logo from '../assets/logo.png'
const Header = () => {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    const [clicked, Setclicked] = useState(false);
    const [mobile, Setmobile] = useState(false);
    const [cart, Setcart] = useState(false);


    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="list-navbar">
                <ul className={mobile ? 'mobile-nav' : 'nav'} onClick={() => Setmobile(false)}>
                    <li >
                        <Link className={splitLocation[1] === "" ? "active" : ""} to='/'>Home</Link>
                    </li>
                    <li >
                        <Link className={splitLocation[1] === "benefits" ? "active" : ""} to='/benefits'>Benefits</Link>
                    </li>
                    <li >
                        <Link className={splitLocation[1] === "pricing" ? "active" : ""} to='/pricing'>Pricing</Link>
                    </li>
                    <li >
                        <Link className={splitLocation[1] === "get-access" ? "active" : ""} to='/get-access'>Get Access</Link>
                    </li>
                    <li>
                        <p>Eng</p>
                    </li>
                    <li>
                        <Link>Members</Link>
                    </li>
                </ul>
            </div>
            <button className="menu-button" onClick={() => Setmobile(!mobile)}>
                {mobile ? <h2><RxCross1 /></h2> : <h2><AiOutlineBars /></h2>}
            </button>
            {/* <div cl */}



        </div>
    )

}

export default Header
