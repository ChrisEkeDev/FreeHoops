import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/backcourts.svg";
import { icon_animations } from "../animations";
import { useGlobalContext } from "../context/globalContext";
import styles from "../styles/main.module.scss";
import { useEffect } from "react";

function AnimatedLogo() {
    const { navigate } = useGlobalContext();


    // useEffect(() => {
    //     const nextPage = setTimeout(navigate('/backcourts'), 10000)
    //     return () => clearTimeout(nextPage)
    // }, [])

    return (
        <motion.section className={styles.page_container} >
            <motion.img
                // {...icon_animations}
                src={logo}
                alt="backcourts"
                className={styles.logo}
            />
        </motion.section>
    )
}

export default AnimatedLogo;
