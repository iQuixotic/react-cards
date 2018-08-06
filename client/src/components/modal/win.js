import React from "react";

import './style.css';

const Win = (props) => {
    return(
        <div className='Win'>
        <div className='Modal-text'>
            You have WON THE GAME!!! :D:D:D
        </div>
            <img className='Modal-img' src='https://media1.giphy.com/media/9Y5BbDSkSTiY8/200.webp' alt='#'/>
        </div>
    );
}

export default Win;