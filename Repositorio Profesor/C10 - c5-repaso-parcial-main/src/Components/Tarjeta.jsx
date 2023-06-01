import React from 'react'

const Tarjeta = ({bday, styles}) => {
    const estilos = {backgroundColor: styles.background, color: styles.color}
  return (
    <div className='tarjeta' style={estilos}>
        <h3>Estas invitado al cumple de {bday.name}</h3>
        <h4>Te espero el día {bday.date} a las 17hs</h4>
        <h2>No faltes!!</h2>
        <h4>Para: {bday.guest}</h4>
    </div>
  )
}

export default Tarjeta