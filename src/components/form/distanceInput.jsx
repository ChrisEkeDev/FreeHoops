import React from 'react';
import { useGlobalContext } from '../../context/globalContext';
import styles from "../../styles/main.module.scss";
import FormLabel from './formLabel';
import { RiMapPinLine } from 'react-icons/ri'

function DistanceInput() {
  const { form, handleForm, navigate } = useGlobalContext();
  return (
    <section className={styles.page_container}>
      <div className={styles.page_contents}>
        <FormLabel
            icon={<RiMapPinLine size={30}/>}
            label="How far are you willing to go?"
        />
        <div className={styles.input_container}>
          <input
            id="distance"
            name="distance"
            type="range"
            min={5}
            max={30}
            step={5}
            value={form.distance}
            className={styles.number_input}
            onChange={(x) => handleForm(x)}
          />
          <span>miles</span>
        </div>
      </div>
      <div className={styles.page_actions}>
        <button
          className={styles.button}
          onClick={() => navigate("/select-location")}
        >
          Back
        </button>
        <button
          className={styles.button}
          onClick={() => navigate("/select-environment")}
        >
          Next
        </button>
      </div>
    </section>
  )
}

export default DistanceInput
