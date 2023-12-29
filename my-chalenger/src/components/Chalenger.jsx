import React, {useState} from "react";

const Chalenger = () =>{

    const [valor1, setValor1] = useState(100);
    const [valor2, setValor2] = useState(200);

    const mostrarSoma = () =>{
        console.log(valor1 + valor2);
    }
    return(
        <div>
            <h1>Olá, Sou um componente</h1>
            <p> Valor 1: {valor1}</p>
            <p>Valor 2: {valor2}</p>
            <button onClick={mostrarSoma}>Mostrar Soma</button>
        </div>
    )
};

export default Chalenger;