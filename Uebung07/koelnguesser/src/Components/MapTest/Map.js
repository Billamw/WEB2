import React from "react";
import MapWithMarker from "./Mapwithmarker.js";

const Map = () => {
    const coordinates = [51.505, -0.09]; // Hier könntest du deine Koordinaten einsetzen

    return (
        <div>
            <h1>OpenStreetMap Marker</h1>
            <MapWithMarker position={coordinates} />
        </div>
    );
};

export default Map;
