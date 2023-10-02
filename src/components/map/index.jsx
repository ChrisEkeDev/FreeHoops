import React, { useEffect, useState, useRef } from 'react';
import ResultsList from '../results/resultsList';
import styles from "../../styles/main.module.scss";
import { useGlobalContext } from '../../context/globalContext';

function Map() {
    const { initializeMap } = useGlobalContext();
    const ref = useRef();

    useEffect(() => {
        initializeMap(ref);
    }, []);

    return (
        <div className={styles.map_container} ref={ref}></div>
    )
}

export default Map
