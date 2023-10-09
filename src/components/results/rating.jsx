import React from 'react'
import { TbStarFilled } from "react-icons/tb";
import styles from "../../styles/main.module.scss";

function Rating({rating, total}) {
    const active = "#FF7C03"
    const inactive = "#C4C4C4"
    return (
        <div className={styles.rating_container}>
            { rating === 0 ? null : <span>{rating}</span> }
            <div className={styles.rating_stars}>
                <TbStarFilled color={ rating >= 1 ? active : inactive }/>
                <TbStarFilled color={ rating >= 2 ? active : inactive }/>
                <TbStarFilled color={ rating >= 4 ? active : inactive }/>
                <TbStarFilled color={ rating >= 4 ? active : inactive }/>
                <TbStarFilled color={ rating >= 5 ? active : inactive }/>
            </div>
            { rating === 0 ? <p>No ratings</p> : <p>({total})</p> }
        </div>
    )
}

export default Rating
