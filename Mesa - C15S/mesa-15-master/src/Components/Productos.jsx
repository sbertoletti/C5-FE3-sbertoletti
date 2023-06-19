import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Productos = () => {
    
    const [productos, setProductos] = useState([])
    const url = '/api/products'
    useEffect(() =>{
        axios(url)
        .then (response => response.data)
        .then (data => setProductos(data.products))
    }, [])

    const borrarProducto = (id) => {
        axios.delete(`${url}/${id}`).then(() => {
            const filteredProductos = productos.filter((producto) => producto.id !== id)
            setProductos(filteredProductos);
        });
    };

    return (
        <div>
            {productos.map(producto => (
                <div key={producto.id}>
                    <h1>{producto.title}</h1>
                    <img src={producto.image} alt="imagen" />
                    <p>{producto.description}</p>
                    <h2>${producto.price}</h2>
                    <button onClick={() =>borrarProducto(producto.id)}>Borrar</button>
                </div>
            ))}
        </div>
    )
}

export default Productos