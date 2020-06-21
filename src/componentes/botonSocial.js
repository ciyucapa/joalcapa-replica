import React from 'react'
import './botonSocial1.css'

function BotonSocial() {
    return(
        <div className="red-social">
            <div className="red-social-app">
                <a target='blank' href='https://www.linkedin.com/in/joalcapa'>
                    <img src='./link.png' className="icon"/><br/>
                    <span className="red-social-title">linkedin</span><br/>
                </a>
            </div>
            <div className="red-social-app">
                <a target='blank' href='https://github.com/joalcapa'>
                    <img src='./githup.png' className="icon"/><br/>
                    <span className="red-social-title">githup</span><br/>
                    <span className="red-social-title">@joalcapa</span><br/>
                </a>
            </div>
            <div className="red-social-app">
                <a target='blank' href='https://web.telegram.org/#/im?p=@joalcapa'>
                    <img src='./telegram.png' className="icon"/><br/>
                    <span className="red-social-title">telegram</span><br/>
                    <span className="red-social-title">@joalcapa</span><br/>
                </a>
            </div>
            <div className="red-social-app">
                <a target='blank' href='https://medium.com/@joalcapa'>
                    <img src='./medium.png' className="icon"/><br/>
                    <span className="red-social-title">medium</span><br/>
                </a>
            </div>
        </div>
    );
}

export default BotonSocial