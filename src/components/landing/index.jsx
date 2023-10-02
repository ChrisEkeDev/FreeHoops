import React from 'react'
import styles from "../../styles/main.module.scss";
import { useGlobalContext } from '../../context/globalContext';

function Landing() {
    const{ navigate } = useGlobalContext();

    return (
        <section className={styles.page_container}>
            <div className={styles.page_contents}>
                <img className={styles.logo}/>
                <h1 className={styles.page_title}>Free Hoops</h1>
                <p className={styles.page_subtitle}>Find free places to play basketball in your area.</p>
                <button onClick={() => navigate("/select-location")} className={styles.button}>Get Started</button>
            </div>
        </section>
    )
}

export default Landing
