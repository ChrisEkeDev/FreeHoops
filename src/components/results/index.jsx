import React from 'react';
import Form from '../form';
import { TbArrowsSort } from "react-icons/tb"
import ResultsList from './resultsList';
import MapWrapper from '../map/mapWrapper';
import { useGlobalContext } from '../../context/globalContext';
import styles from "../../styles/main.module.scss";

function Results() {
    const { results, location, setSort, sort } = useGlobalContext();
    const width = 300

    // if (!verified) return <Redirect to="/" />;

    return (
        <div className={styles.page_container}>
            {
                results.length > 0 ?
                <div className={styles.map_results} style={{width}}>
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
                </div> :
                null
            }
            <div className={styles.map_wrapper} style={results.length > 0 ? { marginLeft: width} : {margin: 0}}>
                <Form/>
                <MapWrapper/>
            </div>
        </div>
    )
}

export default Results
