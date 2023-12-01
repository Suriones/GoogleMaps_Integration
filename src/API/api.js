import axios from 'axios';

const instance = axios.create({
    baseURL: "" // you need a basic database url like this: https://maps-integration-*...*-default-rtdb.firebaseio.com/
})

export const MarkersDataBase = {
    getAll() {
        return instance.get(""); // addition to url like this: "Markers.json"
    },
    putMarker(marker, label) {

        let URL = ""; // addition to url like this: "Markers.json"

        for (let i = 0; i < label - 1; i++) {
            URL = URL + "marker/next/";
        }

        URL = URL.slice(0, -1) + ".json";

        return instance.put(URL, marker)
    }
}