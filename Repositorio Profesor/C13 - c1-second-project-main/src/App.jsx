import { useState } from 'react'
import './App.css'
import ClassComponent from './Components/ClassComponent'
import GetResizeFromWindow from './Components/EjemploPG'
import FuncComponent from './Components/FuncComponent'

function App() {
  const [toggle, setToggle] = useState(true)

  return (
    <>
    { toggle ?
      <ClassComponent/>
      :
      <FuncComponent/>
    }
      <button
        onClick={() => setToggle(!toggle)}
      >Cambiar a componente de {toggle ? 'Función' : 'Clase'}</button>

      <GetResizeFromWindow/>
    </>
  )
}

export default App
