import cardapio from '../../data/cardapio.json';
import styles from './Inicio.module.scss';

const Inicio = () => {
    let pratosRecomendados = [...cardapio];
    pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0,3);
    return ( 
        <div>
            <h3 className={styles.titulo}>Rcomendações da cozinha</h3>
            <div className={styles.recomendados}>
                {pratosRecomendados.map(item => (
                    <div key={item.id} className={styles.recomendado}>
                        <div className={styles.recomendado__imagem}>
                            <img src={item.photo} alt={item.title} />
                        </div>
                        <button className={styles.recomendado__botao}>Ver Mais</button>
                    </div>
                ))}
            </div>

        </div>
     );
}
 
export default Inicio;