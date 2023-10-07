import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context/globalContext';

import { motion } from 'framer-motion';
import { page_transitions } from '../../animations';
import styles from "../../styles/main.module.scss";
import FormLabel from './formLabel';
import { RiMapPinLine } from "react-icons/ri";

function LocationInput() {
    const { form, handleForm, location, setLocation, navigate } = useGlobalContext();

    const geocodeAddress = async (address) => {
        const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
        const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;
        await axios.get(apiUrl)
          .then((response) => {
            const { data } = response;
            if (response.status === 200 && data.status === "OK") {
              const location = data.results[0];
              const locationObj = {
                id: location.place_id,
                address: location.formatted_address,
                coordinates: location.geometry.location
              };
              setLocation(locationObj);
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
    };


    return (
        <motion.section {...page_transitions} className={styles.page_container}>
            <div className={styles.page_contents}>
                <FormLabel
                    icon={<RiMapPinLine size={30}/>}
                    label="What's your address?"
                />
                <div className={styles.input_container}>
                    <input
                        className={styles.text_input}
                        id="location"
                        name="location"
                        value={form.location}
                        onChange={(x) => handleForm(x)}
                    />
                    <button
                        className={styles.button}
                        //disabled={location}
                        onClick={() => geocodeAddress(form.location)}
                    >
                        Verify Address
                    </button>
                </div>
            </div>

            <div className={styles.page_actions}>
                <button
                    className={styles.button}
                    onClick={() => navigate("/")}
                >
                    Back
                </button>
                <button
                    className={styles.button}
                    //disabled={!location}
                    onClick={() => navigate("/select-distance")}
                >
                    Next
                </button>
            </div>

        </motion.section>
    )
}

export default LocationInput
