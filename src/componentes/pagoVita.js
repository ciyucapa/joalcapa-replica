import React from 'react'
import './pagoVita.css'

function PagoVita() {
    return(
        <div className="card-vita">
            <div className="card-vita-title">
            <span>Pago con Vita Wallet</span>
            </div>
            <div className="card-vita-contenido">
             <span>Puedes pagar haciendo uso de Stripe Aqui</span><br/>
             <span>Ingrese el monto a pagar en USD</span>
             <nav className="card-vita-input">
                 <input type="number"></input>
             </nav>
             <button className="card-vita-button"><a href="">PAGAR</a></button>
                <span>Recuerde enviar la captura del pago via whatsapp o telegram</span>
            </div>
        </div>
    )
}
export default PagoVita