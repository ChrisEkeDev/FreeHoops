import { Wrapper } from "@googlemaps/react-wrapper";
import Map from ".";

function MapWrapper() {
    return (
        <Wrapper
            apiKey={import.meta.env.VITE_GOOGLE_API_KEY}
            libraries={["marker", "places"]}
        >
            <Map/>
        </Wrapper>
    )
}

export default MapWrapper
