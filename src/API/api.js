import axios from 'axios';

const instance = axios.create({
    baseURL: "https://maps-integration-d7049-default-rtdb.firebaseio.com/"
})

export const MarkersDataBase = {
    getAll() {
        return instance.get("MarkersHistory.json");
    },
    putMarker(marker, label) {

        let URL = "MarkersHistory/";

        for (let i = 0; i < label - 1; i++) {
            URL = URL + "marker/next/";
        }

        URL = URL.slice(0, -1) + ".json";

        return instance.put(URL, marker)
    }
}