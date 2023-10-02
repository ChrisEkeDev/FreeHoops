import React from 'react'
import { Redirect } from "react-router-dom";
import ResultsList from './resultsList';
import MapWrapper from '../map/mapWrapper';
import { useGlobalContext } from '../../context/globalContext';
import styles from "../../styles/main.module.scss";

function Results() {
    const { form, verified, resetForm, results } = useGlobalContext();

    if (!verified) return <Redirect to="/" />;

    return (
        <div className={styles.page_container}>
            <div className={styles.map_results}>
                <div className={styles.map_location}>

                </div>
                <ResultsList/>
                <div className={styles.map_actions}>
                    <button
                        className={styles.button}
                        onClick={resetForm}
                    >
                        Reset Form
                    </button>
                </div>
            </div>
            <MapWrapper/>
        </div>
    )
}

export default Results
