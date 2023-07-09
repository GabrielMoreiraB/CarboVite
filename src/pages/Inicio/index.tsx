import cardapio from '../../data/cardapio.json';
import styles from './Inicio.module.scss';
import stylesTema from '../../components/styles/Tema.module.scss'

const Inicio = () => {
    let pratosRecomendados = [...cardapio];
    pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0,3);
    return ( 
        <div>

            <h3 className={stylesTema.titulo}>Recomendações da cozinha</h3>

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
            <h3 className={stylesTema.titulo}>Nossa casa</h3>
            <div className={styles.nossaCasa}>
                <img src="nossa_casa.png" alt="casa" />
                <div className={styles.nossaCasa__endereco}>
                    Rua direita, 17 <br/> <br/> Guaraciaba - MG
                </div>
            </div>
        </div>
     );
}
 
export default Inicio;