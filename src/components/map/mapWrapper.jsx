import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Loading from "../loading";
import Map from ".";

function MapWrapper() {

    const render = (status) => {
        switch(status) {
            case Status.LOADING: return <Loading/>;
            case Status.FAILURE: return <Loading/>;
            case Status.SUCCESS: return <Map/>
        }
    }

    return (
        <Wrapper
            apiKey={import.meta.env.VITE_GOOGLE_API_KEY}
            libraries={["marker", "places"]}
            render={render}
        />

    )
}

export default MapWrapper
