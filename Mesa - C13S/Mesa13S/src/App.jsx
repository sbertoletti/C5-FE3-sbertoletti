import { useState } from 'react'

import './App.css'
{/*import ClassComponent from './Components/ClassComponent'*/}
import FunctionalComponent from './Components/FunctionalComponent'
import Compo from './Components/Compo'
import PizzaPedido from './Components/PizzaPedido'
import EffectExample from '../../../../FE3 (2) - C14A - Peticiones Asíncronas en React/EffectExample'

function App() {
  const [toggle, setToggle] = useState(true)

  return (
    <>
    <h1> Mesa 13 S - useEffect </h1> 
    { toggle ? <p>Nada por aqui</p> : <FunctionalComponent /> }
    <button
      onClick={() => setToggle(!toggle)}
    >{toggle ? 'Cancelar' : 'Ver'}Pedido</button>
    <div>
      <Compo />
    </div>
    <div>
      <PizzaPedido />
    </div>
    <br/>
    <hr/>
    <h1> Clase 14 A - useEffect </h1>
    <EffectExample />
    </>
  )
}

export default App