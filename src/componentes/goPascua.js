import React from 'react'
import './css/goPascua.css'

function GoPascua() {
    return(
        <div className="container-text-card">
            <div className="text-card-one">
                <img src={"./imagen3.png"} className="text-card-imagen-one"/>
            </div>
            <div className="text-card-two">
                <h1 className="text-card-title">DESPLIEGUE A PRODUCCIÓN</h1>
                <p className="text-card-text">Despliegue a producción de tus aplicaciones en las tiendas Google Play Store, App Store, HUAWEI App Gallery</p>
                <img src={"./imagen4.png"} className="text-card-imagen-two"/>
            </div>
        </div>
    )    
}

export default GoPascua