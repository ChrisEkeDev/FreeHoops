import React from 'react'
import { motion } from 'framer-motion';
import { page_transitions } from '../../animations';
import styles from "../../styles/main.module.scss";
import { useGlobalContext } from '../../context/globalContext';

function Landing() {
    const{ navigate } = useGlobalContext();

    return (
        <motion.section {...page_transitions} className={styles.page_container}>
            <div className={styles.page_contents}>
                <img className={styles.logo}/>
                <h1 className={styles.page_title}>Free Hoops</h1>
                <p className={styles.page_subtitle}>Find free places to play basketball in your area.</p>
                <button onClick={() => navigate("/select-location")} className={styles.button}>Get Started</button>
            </div>
        </motion.section>
    )
}

export default Landing
