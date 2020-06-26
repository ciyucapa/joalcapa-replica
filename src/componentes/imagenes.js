import React from 'react'
import './css/imagenes.css'

function Imagenes() {
    return( 
        <div className="imagen-desing">
            <div className="imagen-desing-one">
                <img src={"./gohomepascua.png"} className="desing-one" />
                <img src={'./googleplay.png'} className="desing-two" />
            </div>
            <div className="imagen-desing-two">
                <img src={"./conejorosa.png"} className="desing-three"/>
            </div>
        </div>
    )
}

export default Imagenes