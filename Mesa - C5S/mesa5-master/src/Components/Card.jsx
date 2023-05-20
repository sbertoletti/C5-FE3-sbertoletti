import React from 'react'
import '../../App.css'

const Card = ({a}) => {
    return (
        <div key={a.id} className={a.class}>
            <img src={a.image} alt={a.nome} style={{width: "50%"}}/>
            <div className="texto">
                <h3>{a.nome}</h3>
                <h5>{a.preco}</h5>
            </div>
        </div>
    )
}

export default Card