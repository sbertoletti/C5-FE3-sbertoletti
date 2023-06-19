import React, { useState } from 'react'

const pizzas = ["Margherita", "Diavola", "4 Formaggi", "Capricciosa"];

const PizzaPedido = () => {

    const [ pedido, setPedido ] = useState([]);

    const handlePedido = (e) => {
        e.preventDefault();
        setPedido(event.target.value);
        {/**(e) => setBday((prevBday) => ({...prevBday, date: e.target.value})) */}
        console.log(pedido);
    }


    const cancelar = () => {
        <p>Cargando...</p>
        setTimeout(() => {
            alert("Usted está cancelando su pedido")
        }, 2000);
        setPedido([]);
    }
    
    const showPedido = () => {
        <>
            <h2>Su pedido: </h2>
            <p>{pedido}</p>
        </>
    }

    return (
        <div>
            <label>Elija su pizza: 
            <select value={pedido} onChange={handlePedido} className="select">
                <option value="" disabled>Seleccione pizza</option>
                {pizzas.map((item) => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
            </label>

            <button onClick={showPedido}>Ver pedido</button>
            

            <button onClick={cancelar}>Cancelar Pedido</button>
        </div>
    )
}

export default PizzaPedido