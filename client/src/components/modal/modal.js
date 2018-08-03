import React from "react";

import './style.css';

const Modal = (props) => {
    return(
        <div className='Modal'>
            {props.children}
            <button className='try-again'>TRY AGAIN</button>
        </div>
    );
}

export default Modal;