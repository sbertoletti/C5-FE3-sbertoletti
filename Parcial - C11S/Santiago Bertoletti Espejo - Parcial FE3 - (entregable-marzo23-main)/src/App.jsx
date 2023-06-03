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
  });
  const [ valid, setValid ] = useState(0);

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
        setValid(2);
      } else {
        setValid(1);
      }

    }
  };


  return (
    <div className="App">
      <div className={styles.main}>
        <h1>Login</h1>
        {console.log("username a ingresar: " + user.name)}
        {console.log("password a ingresar: " + user.password)}

        <form className={styles.form} onSubmit={submitHandler}>{/* aqui deberias escribir tu codigo */}
          <input className={styles.input} type="text" placeholder="Ingrese su Nombre de Usuario" onChange={(e) => setData((prevData) => ({...prevData, userName: e.target.value}))} />
          <input className={styles.input}type="password"  placeholder="Ingrese su Password" onChange={(e) => setData((prevData) => ({...prevData, password: e.target.value}))} />
          <button className={styles.button} type="submit">Enviar</button>
        </form>

      </div>

      <Card data={data} setData={setData} valid={valid} setValid={setValid}/>
      
      
    </div>
  );
}

export default App;
