import React, {useState} from 'react';
import Boasvindas from "./Boasvindas";
import styles from './estilo.module.css';

export default function App(){
    // Criamos nosso estado
    let [numero, setNumero] = useState(0);
    
    // Criamos uma função para alterar o estado
    const aumentarNumero = () => {
        setNumero(numero + 1);
    }
    
    return (
        <>
            <Boasvindas msg="Essa é minha msg"/>
            <p className={styles.p}>Leo</p>
            <h2>{numero}</h2>
            <button onClick={aumentarNumero}>Add</button>
        </>
    );
}