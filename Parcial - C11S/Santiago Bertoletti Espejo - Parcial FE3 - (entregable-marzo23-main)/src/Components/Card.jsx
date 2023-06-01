//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({data}) {
  return (
    <div>
      <h2>Esto es un componente Renderizador</h2>
      <h1>Bienvenido Usuario: {data.userName}</h1>
      <h1>Quiere cambiar su contraseña?:</h1>
      <input type="password" />
    </div>
  );
}

export default Card;
