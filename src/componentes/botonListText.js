import React from 'react';
import './botonListText.css';

function BotonListText({ title, icon, text}) {
    
    return(
        <div className="column-text">
            <div className="column-text-title">
                {title}
            </div>
            <div className="column-text-icon">
                <img src={icon} className='icon1' />
            </div>
            <div className="column-text-text">
                {text} 
            </div>
        </div>
    );
}

export default BotonListText