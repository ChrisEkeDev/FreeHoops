import React from 'react'
import styles from "../../styles/main.module.scss";

function IconButton({icon, action, label}) {
  return (
    <div className={styles.button_container}>
      <button onClick={action} className={styles.icon_button}>
          {icon}
      </button>
      <div className={styles.button_label}>
        <span>{label}</span>
      </div>
    </div>
  )
}

export default IconButton;
