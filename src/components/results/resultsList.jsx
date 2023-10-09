import React from 'react';
import { motion } from 'framer-motion';
import { parent_transitions } from '../../animations';
import { useGlobalContext } from "../../context/globalContext"
import styles from "../../styles/main.module.scss";
import ResultItem from './resultItem'

function ResultsList() {
  const { results } = useGlobalContext()

  return (
    <motion.ul variants={parent_transitions} initial="hidden" animate="visible" exit="hidden" className={styles.results_list}>
      {
        results.map(result => (
          <ResultItem key={result.id} result={result}/>
        ))
      }
    </motion.ul>
  )
}

export default ResultsList
