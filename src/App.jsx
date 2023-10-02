import { useState } from 'react'
import { Switch, Route } from "react-router-dom";

import './App.css'
import Landing from './components/landing';
import LocationInput from './components/form/locationInput';
import DistanceInput from './components/form/distanceInput';
import EnvironmentInput from './components/form/environmentInput';
import Results from './components/results';

function App() {

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Landing/>
        </Route>
        <Route exact path="/select-location">
          <LocationInput/>
        </Route>
        <Route exact path="/select-distance">
          <DistanceInput/>
        </Route>
        <Route exact path="/select-environment">
          <EnvironmentInput/>
        </Route>
        <Route exact path="/search-results">
          <Results/>
        </Route>
      </Switch>
    </main>
  )
}

export default App
