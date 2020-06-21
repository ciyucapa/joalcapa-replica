import React from 'react'
import './menu.css';
import PagoVita from './pagoVita.js'


function Menu() {
    return(
        <nav className="menu-fixed">
            <ul className="menuPrincipal">
                <li><img src={"./logo.png"} className="logo-header" /></li>
                <li><a href="#servicios"> Servicios</a></li>
                <li><a href="#joalcapa">¿Quien Soy?</a></li>
                <li><a target="blank" href="https://github.com/joalcapa/Gauler">Gauler</a></li>
                <li><a href="#pago">Pago Vita Wallet</a></li>
                <li><a target="blank" href="https://www.youtube.com/channel/UClXNPTC0WrxaMHFTmiDhD6w?view_as=subscriber">YouTube</a></li>
            </ul>
        </nav>
    );
}

export default Menu