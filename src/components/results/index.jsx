import React from 'react';
import Form from '../form';
import { AnimatePresence, motion } from 'framer-motion';
import { menu_animations } from '../../animations';
import { TbArrowsSort } from "react-icons/tb"
import ResultsList from './resultsList';
import MapWrapper from '../map/mapWrapper';
import { useGlobalContext } from '../../context/globalContext';
import styles from "../../styles/main.module.scss";

function Results() {
    const { results, location, setSort, sort } = useGlobalContext();
    const width = 300

    return (
        <div className={styles.page_container}>
            <AnimatePresence>
            {
                results.length > 0 ?
                <motion.div {...menu_animations} className={styles.map_results} style={{width}}>
                    <header className={styles.map_header}>
                        <p>Showing {results.length} results.</p>
                        <div className={styles.select_wrapper}>
                            <TbArrowsSort className={styles.form_icon}/>
                            <select
                                defaultValue={sort}
                                onChange={(x) => setSort(x.target.value)}
                                className={styles.form_select}
                            >
                                <option value="rating">Rating</option>
                            </select>
                        </div>
                    </header>
                    <ResultsList/>
                </motion.div> :
                null
            }
            </AnimatePresence>
            <div className={styles.map_wrapper} style={results.length > 0 ? { marginLeft: width} : {marginLeft: 0}}>
                <Form/>
                <MapWrapper/>
            </div>
        </div>
    )
}

export default Results
