import styles from './Cardapio.module.scss';
import Buscador from './Buscador';
import { useState } from 'react';
import Filtros from './Filtros';
import Ordenador from './Ordenador';
import Itens from './Itens';
import stylesTema from '../../components/styles/Tema.module.scss'

const Cardapio = () => {
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState('');
  return (
    <main>
      <section className={styles.cardapio}>
        <h3 className={stylesTema.titulo}>Cardápio</h3>
        <Buscador busca={busca} setBusca={setBusca} />

        <div className={styles.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro} />
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
        </div>
        <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
      </section>
      <footer className={styles.footer}>
        Orgulhosamente desenvolvido por{' '}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/gabriel-moreira-b2189416b/"
        >
          Gabriel Moreira
        </a>
      </footer>
    </main>
  );
};

export default Cardapio;
