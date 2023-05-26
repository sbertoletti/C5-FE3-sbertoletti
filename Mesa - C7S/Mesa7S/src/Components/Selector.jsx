import styles from './styles.module.css'


const Selector = ({info, setPedido}) => {

    return (
        <div className={styles.selector}>
            <>
            {info.map((item) =>     
                <button className={styles.selBtn} key={item.id} onClick={() => setPedido(item.id)}>{item.tipo}</button>
            )}
            </>
        </div>
    )
};

export default Selector;