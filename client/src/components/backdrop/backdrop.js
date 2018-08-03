import React from "react";

import './style.css';

const Backdrop = (props) => {
    return(
        <div className='Backdrop'>
            {props.children}
        </div>
    );
}

export default Backdrop;