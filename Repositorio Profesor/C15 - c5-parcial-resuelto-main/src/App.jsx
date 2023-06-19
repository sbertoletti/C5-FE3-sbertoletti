import { useState } from "react";
import Card from "./Card";
import Form from "./Form";

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [user, setUser] = useState({
    name: '',
    color: ''
  })
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if(user.name.trim().length > 2 && user.color.length > 5){
      setShow(true)
      setError(false)
    } else {
      setError(true)
    }
  }
  console.log(user)
  return (
    <div className="App">
      <h1>Elige un color</h1>
      <Form setUser={setUser} handleSubmit={handleSubmit}/>
      {error &&  'Por favor chequea que la información sea correcta'}
      {show && <Card user={user}/> }
    </div>
  );
}

export default App;
