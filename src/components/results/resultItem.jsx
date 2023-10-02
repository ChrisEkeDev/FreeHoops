import React from 'react'
import { useGlobalContext } from "../../context/globalContext"
import styles from "../../styles/main.module.scss";
import { RiStarSLine } from "react-icons/ri"
import ResultsList from './resultsList';

function ResultItem({result}) {
    const { mapFocus } = useGlobalContext();
    console.log(result)

    return (
        <li onClick={() => mapFocus(result)} className={styles.result_item}>
            <div className={styles.result_label}>
                <h4>{result.name}</h4>
                <p>{result.address}</p>
            </div>
            {/* <div className={styles.result_rating}>
                <RiStarSLine/>
                <span>{result.rating}</span>
            </div> */}
        </li>
    )
}

export default ResultItem
