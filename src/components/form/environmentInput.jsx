import React from 'react';
import { useGlobalContext } from '../../context/globalContext';
import styles from "../../styles/main.module.scss";
import FormLabel from './formLabel';
import { RiMapPinLine } from "react-icons/ri";

function EnvironmentInput() {
  const { form, handleForm, navigate } = useGlobalContext();
  return (
    <section className={styles.page_container}>
      <div className={styles.page_contents}>
        <FormLabel
            icon={<RiMapPinLine size={30}/>}
            label="Do you prefer indoor or outdoor?"
        />
        <div className={styles.environment_selections}>
          <label
            className={`${styles.environment_item} ${
              form.environment === "indoor" ? styles.active_item : null
            }`}
            htmlFor="indoor"
          >
            <span>Indoor</span>
            <input
              className={styles.radio_input}
              id="indoor"
              type="radio"
              name="environment"
              value="indoor"
              checked={form.environment === "indoor"}
              onChange={(x) => handleForm(x)}
            />
          </label>
          <label
            className={`${styles.environment_item} ${
              form.environment === "outdoor" ? styles.active_item : null
            }`}
            htmlFor="outdoor"
          >
            <span>Outdoor</span>
            <input
              className={styles.radio_input}
              id="outdoor"
              type="radio"
              name="environment"
              value="outdoor"
              checked={form.environment === "outdoor"}
              onChange={(x) => handleForm(x)}
            />
          </label>
          <label
            className={`${styles.environment_item} ${
              form.environment === "either" ? styles.active_item : null
            }`}
            htmlFor="either"
          >
            <span>Either</span>
            <input
              className={styles.radio_input}
              id="either"
              type="radio"
              name="environment"
              value="either"
              checked={form.environment === "either"}
              onChange={(x) => handleForm(x)}
            />
          </label>
        </div>
      </div>
      <div className={styles.page_actions}>
        <button
          className={styles.button}
          onClick={() => navigate("/select-distance")}
        >
          Back
        </button>
        <button
          className={styles.button}
          onClick={() => navigate("/results")}
        >
          Finish
        </button>
      </div>
    </section>
  )
}

export default EnvironmentInput
