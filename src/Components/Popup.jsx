import React from 'react';
import '../App.css'
import '../Mobile.css'
import { FaTimes } from 'react-icons/fa'
const CustomPopup = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <button className='close' onClick={handleClose}><FaTimes /></button>
                {children}

            </section>
        </div>
    );
};

export default CustomPopup;