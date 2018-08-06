import React from "react";

import './style.css';

const Loss = () => {
    return(
        <div className='Loss'>
        <div className='Modal-text'>
            You have lost the game :'(
        </div>
        <div className='Modal-img'> 
            <img src='https://media1.giphy.com/media/9Y5BbDSkSTiY8/200.webp' alt='#'/>
        </div>
        </div>
    );
}

export default Loss;