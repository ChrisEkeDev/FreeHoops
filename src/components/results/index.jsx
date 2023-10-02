import React from 'react'
import { Redirect } from "react-router-dom";
import { useGlobalContext } from '../../context/globalContext';
import styles from "../../styles/main.module.scss";

function Results() {
    const { form, verified, resetForm, results } = useGlobalContext();

    // if (!verified) return <Redirect to="/" />;

    return (
        <div className={styles.page_container}>

        </div>
    )
}

export default Results
