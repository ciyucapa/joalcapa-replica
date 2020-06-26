import React from 'react'
import BotonSocial from './botonSocial.js'
import BotonListText from './botonListText.js'
import GifsIcons from './gifsIcons.js'
import Presentacion from './presentacion.js'
import ZonaAplication from './zonaAplication.js'
import Imagenes from './imagenes.js'
import Information from './information.js'
import GoPascua from './goPascua.js'



const textListData = [
    {id:1, title:'Persistencia de datos', icon:'./imagen1.png', text:'Los datos son importantes, modelar la informacion tambien lo  es, diseño de bases de datos relacionales y no relacionales'},
    {id:2, title:'Desarrollo nativo', icon:'./imagen2.png', text:'Observa como la informacion llega a tu windows sin la necesidad de un navegador, desarrollo de aplicaciones nativas que aprovechan el poder de tu computadora'},
    {id:3, title:'Desarrollo movil', icon:'./imagen03.png', text:'Quien dijo que los dispositivos mobiles no tienen el poder?, lleva tu marca tanto para android como para IOS'},
    {id:4, title:'Desarrollo web', icon:'./imagen04.png', text:'Desarrollar una pagina web es mas que pegar bloques, desarrollo de potentes sistemas web que ejecutan los servicios de tu empresa'},
    {id:5, title:'Sistema de compras', icon:'./imagen05.png', text:'Tus productos a la disposicion de los clientes, con sistemas de compras online y mobiles'},
    {id:6, title:'Diseño gráfico', icon:'./imagen6.png', text:'Si se puede dibujar, se dibujará, diseño a la medida de contenido visual'},
    {id:7, title:'Animacion', icon:'./imagen7.gif', text:'Diseño y animacion de material audiovisual, para comerciales, videojuegos y entretenimiento'},
    {id:8, title:'', icon1:'./imagen8.png', text:'Diseñador grafico desarrollador de videojuegos desarrollador de software',}
]


function Body() {
    return (
        <div className="container">
            <section className="one-articles">
                <Imagenes/>
            </section>
            <section className="two-article">
                <GoPascua/>
            </section>
            <section className="three-article">
                <Information/>
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