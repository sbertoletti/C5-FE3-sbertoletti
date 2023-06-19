import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Componente = () => {
    
    const [ lista, setLista ] = useState([]);


    const url = "../api/products";
    
    useEffect(() => {
        axios(url)                              /* llamo a la api, FUNCIONA! */
        .then((res) => res.data)                /* handleo la respuesta */
        .then(data => setLista(data.products))  /* seteo el estado con la informacion */
        }, []);

/* --FIND-- */


/* --CREATE-- */


/* --READ-- */


/* --UPDATE-- */


/* --DELETE-- */
    const borrarProducto = (id) => {
        axios.delete(`${url}/${id}`)
        .then(() => {
            const filtered = lista.filter((item) => item.id !== id)
            setLista(filtered);
        });
    };

    return (
        <div style={{fontFamily: "helvetica", backgroundColor: "lightgrey", display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
            {lista.map((item) => (
                <div key={item.id} style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <h1 style={{fontFamily: "helvetica"}}>{item.title}</h1>

                    <img style={{width: "20%", height: "auto"}} src={item.image} alt={item.title} />

                    <p>{item.description}</p>

                    <h3 stlye={{backgroundColor: "255, 255, 255, 0.5"}}>$ {item.price}</h3>

                    <button
                        onClick={() => borrarProducto(item.id)}
                        style={{backgroundColor: "grey", color:"white", fontWeight: "bold"}}> Borrar Producto </button>
                </div>
            ))}
        </div>
    )
}

export default Componente;