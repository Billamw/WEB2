import React from "react";
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
    const { koelnCenter } = useMarker();
    const appelhofPlatz = [40.9375, 6.960833];
    const customMarkerIcon = L.icon({
        iconUrl:
            "https://fonts.gstatic.com/s/i/materialiconsoutlined/place/v6/24px.svg",
        iconSize: [38, 95],
        iconAnchor: [17, 60],
        popupAnchor: [-3, -76],
    });

    const { markerPosition, setMarkerPosition, confirmedPosition } =
        useMarker();

    const Markers = () => {
        useMapEvents({
            click: (e) => {
                console.log(confirmedPosition);
                setMarkerPosition(e.latlng);
            },
        });

        return markerPosition === null ? null : (
            <Marker position={markerPosition} icon={customMarkerIcon}></Marker>
        );
    };

    return (
        <div>
            {/* <button onClick={confirmMarker}>Confirm Marker</button> */}
            <MapContainer center={koelnCenter} zoom={10} className="mapid">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                />
                <Markers />
                {confirmedPosition && (
                    <Marker
                        position={confirmedPosition}
                        icon={customMarkerIcon}
                    ></Marker>
                )}
                {confirmedPosition && (
                    <Marker
                        position={appelhofPlatz}
                        icon={customMarkerIcon}
                    ></Marker>
                )}
            </MapContainer>
        </div>
    );
};

export default LeafletMap;
