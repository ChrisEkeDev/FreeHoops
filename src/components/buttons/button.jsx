import React from 'react';
import styles from "../../styles/main.module.scss";

function Button({ label, action}) {
  return (
    <button onClick={action} className={styles.button}>
        <span>{label}</span>
    </button>
  )
}

export default Button
