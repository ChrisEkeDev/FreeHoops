import React from 'react'
import { useGlobalContext } from "../../context/globalContext"
import styles from "../../styles/main.module.scss";
import Rating from './rating';
import { RiStarSLine } from "react-icons/ri"
import ResultsList from './resultsList';

function ResultItem({result}) {
    const { mapFocus } = useGlobalContext();

    return (
        <li onClick={() => mapFocus(result)} className={styles.result_item}>
            <h4>{result.name}</h4>
            <Rating rating={result.rating} total={result.total}/>
            <p>{result.address}</p>
        </li>
    )
}

export default ResultItem
