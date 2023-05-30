import { useState } from 'react'
import './App.css'
import Tarjeta from './Components/Tarjeta';
import Formulario from './Components/Formulario';
import Card from './Components/Card';


function App() {
  const [ styles, setStyles ] = useState({
    background: 'black',
    color: 'white'
  });



  const [ bday, setBday ] = useState({
    name: '',
    date: null,
    guest: ''
  });


  const [ cardinfo, setCardinfo ] = useState('');

  return (
    <>

{/*  MESA 10 */}
      <h1>Carga de Estudiantes</h1>
      <form>
      <label>Carta: </label>
            <input type='text' onChange={(e) => setCardinfo(e.target.value)} />
      </form>
      <Card cardinfo={cardinfo}/>


{/*  CLASE 10 */}
      <Formulario setBday={setBday} setStyles={setStyles}/>
      <Tarjeta bday={bday} styles={styles}/>


    </>
  )
}

export default App
