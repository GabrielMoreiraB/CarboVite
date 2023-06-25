import styles from './Menu.module.scss'
import {Link} from 'react-router-dom'



const Menu = () => {
  const rotas = [{
    label: 'Inicio',
    to: '/'
  }, {
    label: 'Cardápio',
    to: '/cardapio'
  }, {
    label: 'Sobre',
    to: '/sobre'
  }];
    return ( 
        <div>
            <nav className={styles.menu}>
              <img src="Logo.png" alt="" className={styles.logo} />
              <ul className={styles.menu__list}>
              {rotas.map((rota, index) => ( 
                <li key={index} className={styles.menu__link}>
                  <Link to={rota.to}>{rota.label}</Link>
                </li>
                ))}
              </ul>
            </nav>
        </div>
     );
}
 
export default Menu;