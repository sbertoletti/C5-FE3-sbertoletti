import React from 'react'

const Tarjeta = ({bday, styles}) => {

    const estilos = {backgroundColor: styles.background, color: styles.color}

    return (
        <div className="tarjeta" style={estilos}>
            <h2>Hola {bday.name}!</h2>
            <h3>Estas invitado al Cumple de {bday.guest}</h3>
            <h6>Te espero el día: {bday.date}, a la hora: {}</h6>
            <h2>No faltes!</h2>

        </div>
    )
}

export default Tarjeta