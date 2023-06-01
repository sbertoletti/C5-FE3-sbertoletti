import { useState } from 'react';
import Card from './Components/Card.jsx'
import styles from './styles/styles.module.css'

const user = {
  name: "digitalhouse",
  password: "digital123"
};

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs

  const [ data, setData ] = useState({
    userName: '',
    password: '' 
  })

  const [ validador, setValidador ] = useState(false);

  const estandarizador = () => {
    const userStd = data.userName.trim();
    const passStd = data.password.trim();
    setData((prevData) => ({...prevData, userName: userStd}));
    setData((prevData) => ({...prevData, password: passStd}));
  };

  
  const submitHandler = (event) => {
    event.preventDefault();

    estandarizador();

    if ( data.userName.length < 3 ||  data.password.length < 6 ){
      console.log("NO");
    } else {

      if ((data.userName === user.name) && (data.password === user.password))
      {
        setValidador(2);
      } else {
        setValidador(1);
      }
      console.log(validador);
    }
  };

  const card = <Card className={styles.render}data={data}/>;
  const error = <h1 className={styles.error}>Por favor chequea que la información sea correcta</h1>

  return (
    <div className="App">
      <div className={styles.main}>
        <h1>Login</h1>
        {console.log("username a ingresar: " + user.name)}
        {console.log("password a ingresar: " + user.password)}

        <form onSubmit={submitHandler}>{/* aqui deberias escribir tu codigo */}
          <input type="text" placeholder="Ingrese su Nombre de Usuario" onChange={(e) => setData((prevData) => ({...prevData, userName: e.target.value}))} />
          <button type="submit">Enviar</button>
        </form>

        <form onSubmit={submitHandler}>{/* aqui deberias escribir tu codigo */}
          <input type="password"  placeholder="Ingrese su Password" onChange={(e) => setData((prevData) => ({...prevData, password: e.target.value}))} />
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div>
        Ingrese su nombre de usuario y password
        {validador ? card : error}
      </div>
      
      
    </div>
  );
}

export default App;
