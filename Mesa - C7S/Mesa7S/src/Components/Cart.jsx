import styles from './styles.module.css'
import { useState } from 'React'

const Cart = ({pedido, infoPizzas}) => {


    return (
        <div className={styles.cart}>
            {infoPizzas.map((item) => {
                const [ cant, setCant ] = useState(0);

                if ( pedido === item.id ) {
                    
                    return (
                        
                        <div key={item.id}>
                            <h1>{item.tipo}</h1>
                            <h3>Precio: $ {item.precio}</h3>
                            <img className={styles.img}src={item.img} alt={item.tipo}/>
                            <div className={styles.buttonery}>
                                <button className={styles.btnAddMin} onClick={() => setCant((cant + 1))}> + </button>
                                <p>Cantidad: {cant}</p>
                                <button className={styles.btnAddMin} disabled={cant === 0} onClick={() => setCant((cant - 1))}> - </button>
                            </div>
                            <p>Total: $ {cant * item.precio}</p>
                            <button>Confirmar Pedido</button>
                        </div>
                        )
                }})}
        </div>
    )
};
export default Cart;