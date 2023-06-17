import React from "react";
import styles from './Buscador.module.scss';
import { CgSearch } from 'react-icons/cg'


interface Props{
    busca: string;
    setBusca: React.Dispatch<React.SetStateAction<string>>;
}


const Buscador = ({busca, setBusca}: Props) => {

    return ( 
        <div className={styles.buscador}>
            <input 
            placeholder="Buscar"
            type="text"
            value={busca}
            onChange={(e)=> e.target.value}
            />
            <CgSearch
            size={20}
            color ='#4C4D5E'
            />
        </div>
     );
}
 
export default Buscador;