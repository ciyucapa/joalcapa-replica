import React from 'react'
import './css/information.css'

function Information() {
    return(
        <div className="text-create">
            <h1 className="text-create-title">Dime en que piensas!</h1>
            <p className="text-create-text" >Comentame en que piensas y pondre en marcha todos los recursos necesarios para ejecutar tu idea, mediante una serie de procesos que involucran el diseño y desarrollo del software a la medida</p>                    
            <img src={"./imagen5.svg"} className="text-create-imagen" />
            <p className="text-create-text" >Al mas puro estilo de los relojes suizos, cada componente de un sistema se rige bajo un completo, ordenado y muy sincronizado sistema web, las aplicaciones se fabrican de acuerdo a un orden riguroso, desde el diseño conceptual, grafico e interactivo, hasta el consumo y presentacion de la informacion almacenada en bases de datos, las cuales son accedidas de forma muy segura por los servidores web</p>
        </div>
    )
}

export default Information