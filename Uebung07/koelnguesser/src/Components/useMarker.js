import React from "react";
import { useState } from "react";

const useMarker = () => {
    const [markerPosition, setMarkerPosition] = useState(null);
    const [confirmedPosition, setConfirmedPosition] = useState(null);
    const koelnCenter = [50.934633, 6.959839];

    return {
        markerPosition,
        setMarkerPosition,
        confirmedPosition,
        setConfirmedPosition,
        koelnCenter,
    };
};

export default useMarker;
