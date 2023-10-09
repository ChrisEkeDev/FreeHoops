import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { page_transitions } from '../../animations';
import styles from "../../styles/main.module.scss";
import logo from "../../assets/backcourts.svg"

function Loading() {
  return (
    <AnimatePresence mode="wait">
      <motion.div {...page_transitions}>
        <img src={logo} alt="backcourts" className={styles.map_logo}/>
      </motion.div>
    </AnimatePresence>
  )
}

export default Loading
