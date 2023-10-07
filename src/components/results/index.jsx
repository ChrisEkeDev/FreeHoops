import React from 'react';
import Form from '../form';
import { Redirect } from "react-router-dom";
import ResultsList from './resultsList';
import MapWrapper from '../map/mapWrapper';
import { useGlobalContext } from '../../context/globalContext';
import styles from "../../styles/main.module.scss";

function Results() {
    // const { form, results } = useGlobalContext();
    const results = true;

    // if (!verified) return <Redirect to="/" />;

    return (
        <div className={styles.page_container}>
            {results ? <div className={styles.map_results}></div> : null }
            <div className={styles.map_wrapper} style={results ? { marginLeft: 350} : {margin: 0}}>
                <Form/>
                <MapWrapper/>
            </div>
        </div>
    )
}

export default Results
