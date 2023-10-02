import React, { useState, createContext, useContext } from "react";
import { useHistory } from "react-router-dom";
import Loading from "../components/loading";
const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

function GlobalProvider({children}) {
    const history = useHistory();
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
        navigate("/results");
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
                navigate
            }}
        >
            {loading ? <Loading /> : null}
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider
