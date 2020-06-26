import React from 'react';
import './css/botonListText.css';

function BotonListText({ title, icon, text, icon1, icon2}) {
    
    return(
        <div className="column-text">
            <div className="column-text-title">
                {title}
            </div>
            <div className="column-text-icon">
                { icon ? (
                    <img src={icon} className="icon-small" />
                ) : (
                    <img src={icon1} className="icon1" />
                ) 
                }
            </div>
            <div className="column-text-text">
                {text} 
            </div>
        </div>
    );
}

export default BotonListText