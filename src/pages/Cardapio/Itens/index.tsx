import Item from './Item';
import styles from './Itens.module.scss';
import Cardapio from './itens.json';


const Itens = () => {
    return ( 
        <div className={styles.itens}>
            {Cardapio.map((item) => 
                <Item 
                key={item.id}
                {...item}
                />
            )}
        </div>
     );
}
 
export default Itens;