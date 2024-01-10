import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const LeafletMap = () => {
    const customMarkerIcon = L.icon({
        iconUrl:
            "https://fonts.gstatic.com/s/i/materialiconsoutlined/place/v6/24px.svg", // URL zu Ihrem Icon
        iconSize: [38, 95], // Größe des Icons
        iconAnchor: [22, 94], // Punkt des Icons, der auf die genaue Position zeigt
        popupAnchor: [-3, -76], // Punkt, von dem das Popup geöffnet wird
    });

    return (
        <div>
            <MapContainer
                center={[50.934633, 6.959839]}
                zoom={13}
                className="mapid"
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                />
                <Marker
                    position={[50.934633, 6.959839]}
                    icon={customMarkerIcon}
                >
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default LeafletMap;
