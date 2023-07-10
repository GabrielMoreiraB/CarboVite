import styles from './Footer.module.scss'

const Footer = () => {
    return ( 
        <footer className={styles.footer}>
            <img src="Logo.png" alt="logo carbovite" className={styles.logo}/>
        </footer>
     );
}
 
export default Footer;