import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import useMarker from "../useMarker";

import UseHighscore from "../UseHighscore";
import { Link } from "react-router-dom";

const LeafletMap = ({ charName }) => {
    const { addHighscore } = UseHighscore();
    const [round, setRound] = useState(1);
    const totalRounds = 10;
    const point = 6;
    const [score, setScore] = useState(0);

    const {
        markerPosition,
        setConfirmedPosition,
        setMarkerPosition,
        confirmedPosition,
    } = useMarker();

    useEffect(() => {
        console.log("ConfPositon:" + confirmedPosition);
    }, [confirmedPosition]);

    const handleClick = () => {
        setMarkerPosition(null);
        if (round !== totalRounds) {
            setRound(round + 1);
            setConfirmedPosition(markerPosition);
        }

        if (round === totalRounds - 1) {
            addHighscore(charName, score);
        }
        setScore(score + point);
        console.log(score);
    };

    const resetRounds = () => {
        setRound(1);
    };

    const { koelnCenter } = useMarker();
    const appelhofPlatz = [40.9375, 6.960833];
    const customMarkerIcon = L.icon({
        iconUrl:
            "https://fonts.gstatic.com/s/i/materialiconsoutlined/place/v6/24px.svg",
        iconSize: [38, 95],
        iconAnchor: [17, 60],
        popupAnchor: [-3, -76],
    });

    const Markers = () => {
        useMapEvents({
            click: (e) => {
                console.log("Positon:" + confirmedPosition);
                setMarkerPosition(e.latlng);
            },
        });

        return markerPosition === null ? null : (
            <Marker position={markerPosition} icon={customMarkerIcon}></Marker>
        );
    };

    return (
        <div>
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

            {round <= totalRounds - 1 ? (
                <button className="btn btn-primary" onClick={handleClick}>
                    Bestätigen
                </button>
            ) : (
                <Link to="/">
                    <button onClick={resetRounds} className="btn btn-primary">
                        Fertig!
                    </button>
                </Link>
            )}
        </div>
    );
};

export default LeafletMap;
