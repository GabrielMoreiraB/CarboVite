import styles from './Cardapio.module.scss'

const Cardapio = () => {
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
        </main>
     );
}
 
export default Cardapio;