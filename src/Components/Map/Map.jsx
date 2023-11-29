import React, { useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { MarkersDataBase } from "../../API/api.js";

const getMarkers = async () => {

    const result = await MarkersDataBase.getAll();

    const markers = [];
    let label = 1;
    let data = result.data["marker"] ? result.data : undefined;

    while (data) {
        data = data["marker"];
        const location = data.location.split(", ");
        label++;
        markers.push(<Marker position={{ lat: parseFloat(location[0]), lng: parseFloat(location[1]) }} key={label.toString()} label={label.toString()} />);
        data = data["next"];
    }

    return {
        markers: markers,
        label: label + 1
    };
}


const Map = () => {

    const center = { lat: 49.83945, lng: 24.02904 };
    const mapContainerStyle = { width: '1200px', height: '700px' };
    const [userMarker, setUserMarker] = React.useState([<Marker position={center} key={"1"} label={"1"} />]);
    const [label, setLabel] = React.useState();

    useEffect(() => {
        getMarkers().then(result => {
            setUserMarker(result.markers.concat(userMarker));
            setLabel(result.label.toString());
        });
    }, []);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg" // random key from open sources
    });

    const addMarker = (location) => {

        setUserMarker(userMarker.concat([<Marker position={{ lat: location.latLng.lat(), lng: location.latLng.lng() }} label={label} key={label} />]));

        const marker = {
            "marker": {
                location: `${location.latLng.lat()}, ${location.latLng.lng()}`,
                timestamp: `${(new Date).toLocaleDateString()} ${(new Date).toLocaleTimeString()}`
            }
        }

        MarkersDataBase.putMarker(marker, parseInt(label));

        setLabel((parseInt(label) + 1).toString());
    }

    const map = <div><GoogleMap mapContainerStyle={mapContainerStyle} center={center} onClick={addMarker} zoom={12} > {userMarker} </GoogleMap></div>;

    return isLoaded ? map : null;
}

export default Map;