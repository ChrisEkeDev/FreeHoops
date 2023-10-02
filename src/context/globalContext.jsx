import React, { useState, createContext, useContext } from "react";
import { useHistory } from "react-router-dom";
import Loading from "../components/loading";
const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

function GlobalProvider({children}) {
    const history = useHistory();
    const [map, setMap] = useState()
    const [loading, setLoading] = useState(false);
    const [verified, setVerified] = useState(false);
    const [location, setLocation] = useState(null);
    const [results, setResults] = useState([]);
    const [form, setForm] = useState({
        location: "",
        distance: 5,
        environment: ""
    });

    const navigate = (route) => {
        history.push(route);
    };

    const handleForm = (x) => {
        let name = x.target.name;
        let newForm = { ...form };
        newForm[name] = x.target.value;
        setForm(newForm);
    };

    const submitForm = () => {
        setVerified(true);
        navigate("/search-results");
        console.log(form);
    };

    const resetForm = () => {
        setVerified(false);
        setForm({
          location: "",
          distance: 0,
          environment: ""
        });
        setLocation(null);
        setResults([]);
        navigate("/");
    };

    const loadPlaces = (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          const resultsArray = [];
          results.forEach((place) => {
            if (place.business_status === "OPERATIONAL") {
              const lat = place.geometry.location.lat();
              const lng = place.geometry.location.lng();
              let newPlace = {
                id: place.place_id,
                name: place.name,
                address: place.vicinity,
                coordinates: { lat, lng },
                rating: place.rating
              };
              resultsArray.push(newPlace);
            }
          });
          setResults(resultsArray);
        }
    };

    const addMarkers = (map) => {
        for (let i = 0; i < results.length; i++) {
          const result = results[i];
          new window.google.maps.Marker({
            position: result.coordinates,
            title: result.name,
            map: map
          });
        }
    };

    const initializeMap = (ref) => {
        const radius = form.distance * 1609.344;
        const center = new window.google.maps.LatLng(
          location.coordinates.lat,
          location.coordinates.lng
        );
        const mapOptions = {
          mapId: "86830891768e3be3",
          center: center,
          zoom: 15,
          disableDefaultUI: true
        };
        const newMap = new window.google.maps.Map(ref.current, mapOptions);
        const request = {
          location: center,
          radius: radius.toString(),
          keyword: form.environment !== "either" ? `${form.environment} basketball courts` : `basketball courts`
        };
        const service = new window.google.maps.places.PlacesService(newMap);
        service.nearbySearch(request, loadPlaces);
        new window.google.maps.Marker({
          position: {
            lat: location.coordinates.lat,
            lng: location.coordinates.lng
          },
          map: newMap
        });
        addMarkers(newMap);
        setMap(newMap);
    };

    const mapFocus = (place) => {
        map.setCenter(place.coordinates)
    }

    return (
        <GlobalContext.Provider
            value={{
                verified,
                form,
                handleForm,
                submitForm,
                resetForm,
                location,
                setLocation,
                results,
                setResults,
                navigate,
                initializeMap,
                mapFocus
            }}
        >
            {loading ? <Loading /> : null}
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider
