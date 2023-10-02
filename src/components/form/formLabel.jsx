import React from 'react'
import styles from "../../styles/main.module.scss";

function FormLabel({icon, label}) {
  return (
    <div className={styles.label_container}>
        {icon}
        <h2 className={styles.form_label}>{label}</h2>
    </div>
  )
}

export default FormLabel
