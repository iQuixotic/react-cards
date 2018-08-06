import React from "react";

import './style.css';

const Loss = (props) => {
    return(
        <div className='Loss'>
        <div className='Modal-text'>
            You have lost the game :'(
        </div>
            <img className='Modal-img' src='https://media1.giphy.com/media/9Y5BbDSkSTiY8/200.webp' alt='#'/>
        </div>
    );
}

export default Loss;