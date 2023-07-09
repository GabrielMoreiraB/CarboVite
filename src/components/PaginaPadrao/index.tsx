import { Outlet } from 'react-router-dom';
import styles from './PaginaPadrao.module.scss';
import stylesTema from '../../components/styles/Tema.module.scss'

const PaginaPadrao = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_text}>
          Casa de Massas de Origem Mineira e Coração Italiano
        </div>
      </header>
      <div className={stylesTema.container}>
        <Outlet />
      </div>
    </>
  );
};

export default PaginaPadrao;
