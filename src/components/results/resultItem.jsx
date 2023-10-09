import React from 'react'
import { motion } from 'framer-motion';
import { useGlobalContext } from "../../context/globalContext";
import { child_transitions } from '../../animations';
import styles from "../../styles/main.module.scss";
import Rating from './rating';

function ResultItem({result}) {

    const { mapFocus } = useGlobalContext()

    return (
        <motion.li variants={child_transitions} onClick={() => mapFocus(result)} className={styles.result_item}>
            <h4>{result.name}</h4>
            <Rating rating={result.rating} total={result.total}/>
            <p>{result.address}</p>
        </motion.li>
    )
}

export default ResultItem
