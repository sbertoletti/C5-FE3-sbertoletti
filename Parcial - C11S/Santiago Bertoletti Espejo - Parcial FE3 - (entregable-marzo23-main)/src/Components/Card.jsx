import styles from '../styles/styles.module.css'
//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({data, setData, valid, setValid}) {

  const reset = () => {
    setData({userName: '', password: ''})
    setValid(0);
  }

  if (valid === 0) {
    return(
      <div></div>
    )
  } else if (valid === 1){

  return (
    <div>
      <h1 className={styles.error}>Por favor chequea que la información sea correcta</h1>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
  } else if ( valid === 2 ){
    
  return (
    <div className={styles.cartaRender}>
      <h2>Esto es un componente Renderizador</h2>
      <h1>Bienvenido Usuario: {data.userName}</h1>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
  
  }
}

export default Card;
