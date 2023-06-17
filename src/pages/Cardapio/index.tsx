import styles from './Cardapio.module.scss';
import Buscador from './Buscador';
import { useState } from 'react';
import Filtros from './Filtros';
import Ordenador from './Ordenador';


const Cardapio = () => {
    const [busca, setBusca] = useState('');
    const [filtro, setFiltro] = useState<number | null>(null);
    const [ ordenador, setOrdenador] = useState('');
    return ( 
        <main>
            <nav className={styles.menu}>
                <img src="Logo.png" alt=""  className={styles.logo}/>
            </nav>
            <header className={styles.header}>
                <div className={styles.header_text}>
                    Casa de Massas de Origem Mineira e Coração Italiano
                </div>

            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio_titulo}>Cardápio</h3>
                <Buscador
                    busca={busca}
                    setBusca={setBusca}
                />

                <div className={styles.cardapio__filtros}>
                    <Filtros filtro={filtro} setFiltro={setFiltro}/>
                    <Ordenador ordenador ={ordenador} setOrdenador={setOrdenador}/>
                </div>
            </section>
        </main>
     );
}
 
export default Cardapio;