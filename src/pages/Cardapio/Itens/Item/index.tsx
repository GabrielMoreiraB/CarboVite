import { useNavigate } from 'react-router-dom';
import { Prato } from '../../../../types/Prato';
import styles from './Item.module.scss';
import classNames from 'classnames';


const Item = (props : Prato) => {
    const {title, size, serving, price, photo, description, category, id} = props;
    const navigate = useNavigate();
    return (
        <div className={styles.item} onClick={()=> navigate(`/prato/${id}`)}>
            <div className={styles.item__imagem}>
                <img src={photo} alt={title} />
            </div>

            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className={styles.item__tags}>
                    <div className={classNames({
                        [styles.item__tipo]: true,
                        [styles[`item__tipo__${category.label.toLowerCase()}`]]:true,
                    })}>
                        {category.label}
                    </div>
                    <div className={styles.item__porcao}>
                        {size}g
                    </div>
                    <div className={styles.item__qtdpessoas}>
                        serve {serving} pessoa{serving===1? '':'s'}
                    </div>
                    <div className={styles.item__valor}>
                        R${price.toFixed(2)}
                    </div>
                </div>
            </div>
            </div>    );
}

            export default Item;