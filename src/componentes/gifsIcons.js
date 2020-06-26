import React from 'react'
import './css/gifsIcons.css'

function GifsIcons() {
    return(
    <div className="gif-icon-section">
        <div className="gif-icon">
            <div className="gif-icon-imagen">
                <img src={'./liveAudio.gif'} className="gif-icon-imagen" />
            </div>
            <div className="gif-icon-text">
                Desarrollo de servicios para transmisión y reproducción de audio para aplicaciones web, mobiles y de escritorio
            </div>
        </div>
        <div className="gif-icon1">
            <div className="gif-icon-imagen">
                <img src={'./liveVideo.gif'} className="gif-icon-imagen"/>
            </div>
            <div className="gif-icon-text">
                Desarrollo de servicios para transmisión de video en tiempo real, en aplicaciones como chats de videollamadas, servidores dedicados para multimedia, entre otros
            </div>
        </div>
    </div>
    );
}

export default GifsIcons