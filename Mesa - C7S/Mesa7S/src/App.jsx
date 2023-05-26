import './App.css'
import { useState } from 'react'
import Cart from './Components/Cart.jsx'
import Selector from './Components/Selector';
import pizzas from './assets/info.js'
import styled from 'styled-components';


const ButtonerContainer = styled.div`
  display: block
  top: 2erm;
  left: 2rem;
  flex-direction: column;
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;
const SideContainer = styled.div`
  box-sizing: border-box;
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
  background-color: rgba(100,100,100,0.2);
`;

function App() {
  const [ pedido, setPedido ] = useState([]);

  return (
    <>
    <ButtonerContainer>
      <Selector info={pizzas} setPedido={setPedido}/>
    </ButtonerContainer>
    <SideContainer>
      <h3>Pedido</h3>
      <Cart pedido={pedido} infoPizzas={pizzas} />
    </SideContainer>
    </>
  )
}

export default App;
