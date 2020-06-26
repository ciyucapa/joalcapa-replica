import React from 'react'
import './css/zonaAplication.css'

function ZonaAplication() {

    return(
        <div className="text-zona">
            <div className="text-zona-imagen-one">
                <img src={"./celapp.png"} className="imagen-one" />
            </div>
            <div className="text-zona-one">
                <div className="text-aplication">
                    ZONA DE <span className="text-aplication-one"> APLICACIONES </span>
                </div>
                <h1 className="text-zona-title"> APLICACIONES </h1>
                <span className="text-zona-text"> Detras de un gran diseño, existe el desarrollo de todo un sistema capaz de almacenar la informacion, procesarla y analizarla para tomar mejores decisiones en tu negocio</span>
            </div>
            <div className="text-zona-imagen-two">
                 <img src={"./moto.png"} className="imagen-two" />
            </div>
            <div className="text-zona-one">
                    <div className="text-aplication">
                        ZONA DE <span className="text-aplication-one"> VIDEOJUEGOS </span>
                    </div>
                <h1 className="text-zona-title"> VIDEOJUEGOS </h1>
                <p className="text-zona-text">Tienes una idea?, plasma tu creatividad con ilustraciones realmente impactantes, historias que dejaran volar la imaginacion en dispositivos como android y IOS</p>
            </div>
        </div>
    )
    
}

export default ZonaAplication