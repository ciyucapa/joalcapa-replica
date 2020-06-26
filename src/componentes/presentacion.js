import React from 'react'
import './css/presentacion.css'

function Presentacion () {

    return(
        <div className="section-six" name="presentacion">
            <div>
                <img src={"./josecaceres.jpg"} className="photo1" />
            </div>
        <div className="text-name">
            <span className="name"><b>JOSE CACERES</b></span>
        <div className="text-card">
            <span> Me dedico al desarrollo de sistemas informáticos a la medida, para todo tipo de clientes <br/> teniendo como excelencia principal el trabajo de calidad, bajo estándares en la industria del desarrollo de software <br/> mi ética profesional y moral me ha llevado a conocer gratos clientes <br/> los cuales considero como amigos en este corto camino llamado vida.</span>
        </div>
        <div className="button">
            <span className="button-one">Desarrollador de software</span>
            <span className="button-two">Diseñador gráfico</span>
            <span className="button-three">Animador de videojuegos</span>
            </div>
        </div>
        <div className="lenguajes">
            <span>react, react-native, angular, laravel, symfony, Yii2, falcon python, android native, libGdx, nodeJs, express, loopback, mongoDB, mySql, oracle DB, postgreSql, ruby on rails, google cloud, AWS, corel draw, photoshop, illustrator</span>
        </div>
        </div>
    );

}

export default Presentacion