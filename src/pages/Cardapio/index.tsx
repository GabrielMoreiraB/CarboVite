import styles from './Cardapio.module.scss'

const Cardapio = () => {
    return ( 
        <main>
            <nav className={styles.menu}>
                <img src="Logo.png" alt=""  className={styles.logo}/>
            </nav>
        </main>
     );
}
 
export default Cardapio;