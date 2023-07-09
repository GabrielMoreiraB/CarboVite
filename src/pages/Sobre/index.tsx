import styles from './Sobre.module.scss';
import stylesTema from '../../components/styles/Tema.module.scss';
const Sobre = () => {
  return (
    <section>
      <h3 className={stylesTema.titulo}>Sobre</h3>
      <div className={styles.sobreNos}>
        <img src="casa.png" alt="casa Aluroni" />
        <div className={styles.sobreNos__texto}>
          <p>
            Nós da CarboVite oferecemos a vocês, nossos queridos clientes, a
            Massa Italiana Caseira mais saborosa e sofisticada de Minas!
            Prezamos pelos ingredientes tradicionais da culinária Italiana,
            frescos e de excelente qualidade para que sua experiência seja ainda
            mais intensa!
          </p>
          <p>
            Também possuímos uma cardápio de carnes com muitas opções de acordo
            com o seu gosto!
          </p>
          <p>
            Para acompanhar as massas italianas, a Carbovite possui uma reserva
            de vinhos especiais, que harmonizam perfeitamente com o seu parto,
            seja carne ou massa!
          </p>
        </div>
      </div>
      <div className={styles.imagens}>
            <div className={styles.imagens__imagem}>
                <img src="massa1.png" alt="" />
            </div>
            <div className={styles.imagens__imagem}>
                <img src="massa2.png" alt="" />
            </div>
        </div>
    </section>
  );
};

export default Sobre;
