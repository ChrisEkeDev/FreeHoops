import React from 'react'
import { useGlobalContext } from "../../context/globalContext"
import styles from "../../styles/main.module.scss";
import ResultItem from './resultItem'

function ResultsList() {
  const { results } = useGlobalContext()

  return (
    <ul className={styles.results_list}>
      {
        results.map(result => (
          <ResultItem key={result.id} result={result}/>
        ))
      }
    </ul>
  )
}

export default ResultsList
