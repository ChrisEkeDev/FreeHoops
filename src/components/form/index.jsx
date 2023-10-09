import React from 'react'
import { TbCurrentLocation, TbCurrentLocationOff, TbMapPin, TbRoad, TbSearch } from "react-icons/tb"
import IconButton from "../buttons/iconButton";
import Button from '../buttons/button';
import { useGlobalContext } from '../../context/globalContext';
import styles from "../../styles/main.module.scss";

function Form() {
    const { address, setAddress, distance, setDistance, currentLocation, setCurrentLocation, geocodeAddress } = useGlobalContext();

    return (
        <div className={styles.form_container}>
            <div className={styles.form_input_container}>
                <TbMapPin className={styles.form_icon}/>
                <input
                    value={address}
                    onChange={(x) => setAddress(x.target.value)}
                    className={styles.form_input}
                    placeholder='Enter your address'
                />
                <IconButton
                    action={() => setCurrentLocation(!currentLocation)}
                    label={currentLocation ? "Location Enabled" : "Location Disabled"}
                    icon={currentLocation ? <TbCurrentLocation/> : <TbCurrentLocationOff/>}
                />
            </div>
            <div className={styles.form_input_container}>
                <TbRoad className={styles.form_icon}/>
                <select
                    defaultValue={distance}
                    onChange={(x) => setDistance(x.target.value)}
                    className={styles.form_select}
                >
                    <option value={5}>5 miles</option>
                    <option value={10}>10 miles</option>
                    <option value={15}>15 miles</option>
                    <option value={20}>20 miles</option>
                    <option value={25}>25 miles</option>
                    <option value={30}>30 miles</option>
                </select>
            </div>
            <div className={styles.form_input_container}>
                <Button
                    action={geocodeAddress}
                    label="Search BackCourts"
                />
            </div>
        </div>
    )
}

export default Form
