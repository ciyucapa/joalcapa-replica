import React from 'react'
import BotonSocial from './botonSocial.js';
import BotonListText from './botonListText.js';
import GifsIcons from './gifsIcons.js';
import Presentacion from './presentacion.js';
import ZonaAplication from './zonaAplication.js';


const textListData = [
    {id:1, title:'Persistencia de datos', icon:'./imagen1.png', text:'Los datos son importantes, modelar la informacion tambien lo  es, diseño de bases de datos relacionales y no relacionales'},
    {id:2, title:'Desarrollo nativo', icon:'./imagen2.png', text:'Observa como la informacion llega a tu windows sin la necesidad de un navegador, desarrollo de aplicaciones nativas que aprovechan el poder de tu computadora'},
    {id:3, title:'Desarrollo movil', icon:'./imagen03.png', text:'Quien dijo que los dispositivos mobiles no tienen el poder?, lleva tu marca tanto para android como para IOS'},
    {id:4, title:'Desarrollo web', icon:'./imagen04.png', text:'Desarrollar una pagina web es mas que pegar bloques, desarrollo de potentes sistemas web que ejecutan los servicios de tu empresa'},
    {id:5, title:'Sistema de compras', icon:'./imagen05.png', text:'Tus productos a la disposicion de los clientes, con sistemas de compras online y mobiles'},
    {id:6, title:'Diseño gráfico', icon:'./imagen6.png', text:'Si se puede dibujar, se dibujará, diseño a la medida de contenido visual'},
    {id:7, title:'Animacion', icon:'./imagen7.gif', text:'Diseño y animacion de material audiovisual, para comerciales, videojuegos y entretenimiento'},
    {id:8, title:'', icon:'./imagen8.png', text:'Diseñador grafico desarrollador de videojuegos desarrollador de software' }
]


function Body() {
    
    return(
        <div className="container">
            <section className="one-articles">
                <div className="imagen-desing">
                    <div className="imagen-desing-one">
                        <img src={"./gohomepascua.png"} className="desing-one" />
                        <img src={'./googleplay.png'} className="desing-two" />
                    </div>
                    <div className="imagen-desing-two">
                        <img src={"./conejorosa.png"} className="desing-three"/>
                    </div>
                </div>
            </section>
            <section className="two-article">
                <div className="container-text-card">
                    <div className="text-card-one">
                        <img src={"./imagen3.png"} className="text-card-imagen-one" />
                    </div>
                    <div className="text-card-two">
                        <h1 className="text-card-title">DESPLIEGUE A PRODUCCIÓN</h1>
                        <p className="text-card-text">Despliegue a producción de tus aplicaciones en las tiendas Google Play Store, App Store, HUAWEI App Gallery</p>
                        <img src={"./imagen4.png"} className="text-card-imagen-two" />
                    </div>
                </div>
            </section>
                <section className="three-article">
                    <div className="text-create">
                        <h1 className="text-create-title">Dime en que piensas!</h1>
                        <p className="text-create-text" >Comentame en que piensas y pondre en marcha todos los recursos necesarios para ejecutar tu idea, mediante una serie de procesos que involucran el diseño y desarrollo del software a la medida</p>                    
                        <img src={"./imagen5.svg"} className="text-create-imagen" />
                        <p className="text-create-text" >Al mas puro estilo de los relojes suizos, cada componente de un sistema se rige bajo un completo, ordenado y muy sincronizado sistema web, las aplicaciones se fabrican de acuerdo a un orden riguroso, desde el diseño conceptual, grafico e interactivo, hasta el consumo y presentacion de la informacion almacenada en bases de datos, las cuales son accedidas de forma muy segura por los servidores web</p>
                    </div>
                </section>
                <section className="four-article">
                    <GifsIcons/>
                </section>
                <section className="five-article">
                    <nav className="subcontainer-one">
                        {textListData.map((textData) => <BotonListText key={textData.id} {...textData} /> )}
                    </nav>
                </section>
                <section className="six-article"><a name="joalcapa"/>
                    <Presentacion/>
                </section>
                <section className="seven-article"><a name="servicios"/>
                    <ZonaAplication/>
                </section>
                <section className="eight-article"> 
                        <BotonSocial/>  
                </section>
        </div>
    );
}

export default Body