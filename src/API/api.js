import axios from 'axios';

const instance = axios.create({
    baseURL: "https://mapsintegration-77540-default-rtdb.firebaseio.com/"
})

export const MarkersDataBase = {
    getAll() {
        return instance.get("Markers.json");
    },
    putMarker(marker, label) {
        let URL = "Markers/";

        for (let i = 0; i < label - 1; i++) {
            URL = URL + "marker/next/";
        }

        URL = URL.slice(0, -1) + ".json";

        return URL.length >= 192 ? instance.delete("Markers/marker/next/marker.json") : instance.put(URL, marker);
    }
}