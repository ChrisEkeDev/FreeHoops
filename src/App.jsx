import { useState } from 'react'
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import styles from "./styles/main.module.scss";
import './App.css'
import Landing from './components/landing';
import LocationInput from './components/form/locationInput';
import DistanceInput from './components/form/distanceInput';
import EnvironmentInput from './components/form/environmentInput';
import Results from './components/results';
import AnimatedLogo from './logo';

function App() {
  const location = useLocation();
  return (
    <main className={styles.app_wrapper}>
      <AnimatePresence mode='wait'>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={AnimatedLogo}/>
          <Route exact path="/backcourts" component={Results}/>
        </Switch>
      </AnimatePresence>
    </main>
  )
}

export default App
