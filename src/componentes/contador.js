import React, {useState} from 'react'

function Contador() {

    const [numero, setNumero] = useState(0);
    function aumentar() {
        return(
            setNumero(numero + 1)
        );
    }
    
    return(
        <>
            <h1>Hola Quiero comprar {numero} de estos chocolates </h1>
            <button onClick={aumentar} >AUMENTAR</button>
        </>
    )
}

export default Contador