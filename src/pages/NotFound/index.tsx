import styles from './NotFound.module.scss'
import stylesTema from '../../components/styles/Tema.module.scss'
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return ( 
        <div className={classNames({
            [styles.container]:true,
            [stylesTema.container]:true
        })}>
            <div className={styles.voltar}>
                <button onClick={()=> navigate(-1)}>
                    {'< Voltar'}
                </button>
            </div>
            <img src="not_found.svg" alt="" />
            
        </div>
     );
}
 
export default NotFound;