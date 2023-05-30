import React from 'react'
import '../App.css'

const Formulario = ({setBday, bday, setStyles}) => {
    
    return (
        <div className='form'>
            <label>Nombre del Compañero: </label>
            <input type='text' onChange={(e) => setBday((prevBday) => ({...prevBday, name: e.target.value}))} />
            
            <label>Nombre del Cumpleañero: </label>
            <input type='text' onChange={(e) => setBday((prevBday) => ({...prevBday, guest: e.target.value}))} />
            
            <label>Ingresar Fecha: </label>
            <input type='date' onChange={(e) => setBday((prevBday) => ({...prevBday, date: e.target.value}))} />

            <label>Color de Fondo: </label>
            <select onChange={(e) => setStyles((prevStyles) => ({...prevStyles, background: e.target.value}))}> 
            {/* Falta el codigo para vincular styles al css */}
                <option value='red'>Red</option>
                <option value='blue'>Blue</option>
                <option value='green'>Green</option>
                <option value='yellow'>Yellow</option>
            </select>

            <label>Color de Letra: </label>
            <select onChange={(e) => setStyles((prevStyles) => ({...prevStyles, color: e.target.value}))}>
                <option value='red'>Red</option>
                <option value='blue'>Blue</option>
                <option value='green'>Green</option>
                <option value='yellow'>Yellow</option>
            </select>

            
        </div>
    )
}

export default Formulario;