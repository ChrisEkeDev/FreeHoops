import React, { useState, createContext, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Loading from "../components/loading";
import axios from "axios";
const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

function GlobalProvider({children}) {
    const [ address, setAddress ] = useState("");
    const [ distance, setDistance ] = useState(5);
    const [ sort, setSort ] = useState("rating")
    const [ currentLocation, setCurrentLocation] = useState(false)
    const history = useHistory();
    const [map, setMap] = useState()
    const [loading, setLoading] = useState(false);
    const [verified, setVerified] = useState(false);
    const [location, setLocation] = useState();
    const [results, setResults] = useState([]);

    const navigate = (route) => {
        history.push(route);
    };

    const searchBackcourts = async (location) => {
      const radius = distance * 1609.344;
      const request = {
          location: location.coordinates,
          radius: radius.toString(),
          keyword: "basketball courts"
      };
      const service = new window.google.maps.places.PlacesService(map);
      service.nearbySearch(request, loadPlaces);
      new window.google.maps.Marker({
        position: location.coordinates,
        map: map
      });
      addMarkers();
    }

    const geocodeAddress = async () => {
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
            setAddress(locationObj.address)
            setLocation(locationObj);
            searchBackcourts(locationObj)
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
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
                rating: place.rating,
                total: place.user_ratings_total
              };
              resultsArray.push(newPlace);
            }
          });
          setResults(resultsArray);
        }
    };

    const addMarkers = () => {
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
        let center;
        if (currentLocation) {
          navigator.geolocation.getCurrentPosition(position => {
            center = new window.google.maps.LatLng(
              position.coords.latitude,
              position.coords.longitude
            )
          });
        } else {
          center = new window.google.maps.LatLng(
            37.421949,
            -122.084773
          )
        }

        const mapOptions = {
          mapId: "86830891768e3be3",
          center: center,
          zoom: 15,
          disableDefaultUI: true
        };
        const newMap = new window.google.maps.Map(ref.current, mapOptions);
        setMap(newMap);
    };

    const mapFocus = (place) => {
        map.setCenter(place.coordinates)
    }

    useEffect(() => {
      if (currentLocation) {
        console.log("search via current location")
      }
    }, [currentLocation])

    return (
        <GlobalContext.Provider
            value={{
                geocodeAddress,
                address,
                setAddress,
                distance,
                setDistance,
                sort,
                setSort,
                currentLocation,
                setCurrentLocation,
                results,
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
