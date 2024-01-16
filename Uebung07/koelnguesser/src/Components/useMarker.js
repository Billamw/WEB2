import { useState } from "react";

const useMarker = () => {
    const [markerPosition, setMarkerPosition] = useState(null);
    const [confirmedPosition, setConfirmedPosition] = useState(null);
    const koelnCenter = [50.934633, 6.959839];

    const initialPlaces = {
        koelndom: {
            coordinates: [50.941278, 6.957016],

            image: "/images/koelndom.png",
        },
        deutzerfreiheitmarkt: {
            coordinates: [50.936697, 6.97322],
            image: "/images/deutzerfreiheitmarkt.png",
        },
        mediapark: {
            coordinates: [50.947831, 6.944209],
            image: "/images/mediapark.png",
        },
        pascha: {
            coordinates: [50.954797, 6.940484],
            image: "/images/pascha.png",
        },
    };

    const [places, setPlaces] = useState(initialPlaces);

    const shufflePlaces = () => {
        const newPlaces = { ...places };
        const keys = Object.keys(newPlaces); // Definieren Sie 'keys' vor der for-Schleife
        for (let i = keys.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [keys[i], keys[j]] = [keys[j], keys[i]];
        }
        setPlaces(Object.fromEntries(keys.map((key) => [key, newPlaces[key]])));
    };

    return {
        markerPosition,
        setMarkerPosition,
        confirmedPosition,
        setConfirmedPosition,
        koelnCenter,
        places,
        shufflePlaces,
    };
};

export default useMarker;
