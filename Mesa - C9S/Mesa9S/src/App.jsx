import "./styles.css";
import Selector from './Components/Selector.jsx'
import Renderer from './Components/Renderer.jsx'
import notes from './assets/notes.js'
import { useState } from 'react'
import VoteInput from "./Components/VoteInput";



function App() {

  const [ iterador, setIterador ] = useState({
    id: 0,
    materia: '',
    cantidadEstudiantes: 0,
    promedio: 0,
    value: ''
})

  const [ info, setInfo ] = useState(notes);

  console.log(info);

  const [ selected, setSelected ] = useState(0);

  return (
    <div className="container">
      <h1>Promedio de estudiantes por carrera</h1>

      <Selector info={info} setSelected={setSelected} />

      <VoteInput info={info} setInfo={setInfo} setIterador={setIterador} iterador={iterador}/>

      <Renderer info={info} selected={selected} iterador={iterador} />

{/*
<div>
  <form className="form" onSubmit={handleSubmit}>
    <div className="container_input">
      <select>
        <option selected disabled>
          Selecione una carrera
        </option>
        <option value="database">Base de Datos</option>
        <option value="backend">Desarrollo Backend</option>
        <option value="frontend">Desarrollo Frontend</option>
        <option value="devops">Devops</option>
      </select>
      <input />
    </div>
    <input type="submit" value="Salvar" />
  </form>
</div> 
      

<div className="container">
  <table border="1" className="line_title">
    <thead>
      <tr>
        <th>Carrera</th>
        <th>Cantidad de Estudiantes</th>
        <th>Promedio de Calificaciones de los Estudiantes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Base de Datos</td>
        <td>0</td>
        <td>0</td>
      </tr>

      <tr>
        <td>Desarrollo Frontend</td>
        <td>0</td>
        <td>0</td>
      </tr>

      <tr>
        <td>Desarrollo Backend</td>
        <td>0</td>
        <td>0</td>
      </tr>
    </tbody>
  </table>
</div>
*/
}
    </div>
  );
}

export default App;
