import React, { useState } from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import useMarker from "../useMarker";

const LeafletMap = () => {
    const koelnCenter = [50.934633, 6.959839];
    const customMarkerIcon = L.icon({
        iconUrl:
            "https://fonts.gstatic.com/s/i/materialiconsoutlined/place/v6/24px.svg", // URL zu Ihrem Icon
        iconSize: [38, 95], // Größe des Icons
        iconAnchor: [17, 60], // Punkt des Icons, der auf die genaue Position zeigt
        popupAnchor: [-3, -76], // Punkt, von dem das Popup geöffnet wird
    });

    const {
        markerPosition,
        setMarkerPosition,
        confirmedPosition,
        setConfirmedPosition,
    } = useMarker();

    const Markers = () => {
        useMapEvents({
            click: (e) => {
                setMarkerPosition(e.latlng);
            },
        });

        return markerPosition === null ? null : (
            <Marker position={markerPosition} icon={customMarkerIcon}></Marker>
        );
    };

    // const confirmMarker = () => {
    //     setConfirmedPosition(markerPosition);
    //     setMarkerPosition(null);
    // };

    return (
        <div>
            {/* <button onClick={confirmMarker}>Confirm Marker</button> */}
            <MapContainer center={koelnCenter} zoom={13} className="mapid">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                />
                <Markers />
                {confirmedPosition && (
                    <Marker
                        position={confirmedPosition}
                        icon={customMarkerIcon}
                    >
                        <Popup>Confirmed position</Popup>
                    </Marker>
                )}
            </MapContainer>
        </div>
    );
};

export default LeafletMap;
