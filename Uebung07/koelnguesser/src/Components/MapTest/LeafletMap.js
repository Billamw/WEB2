import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import useMarker from "../useMarker";

import UseHighscore from "../UseHighscore";
import { Link } from "react-router-dom";

const LeafletMap = ({ charName, round, setRound }) => {
    const { addHighscore } = UseHighscore();
    const totalRounds = 10;
    const point = 6;
    const [score, setScore] = useState(0);
    const [isConfirmed, setIsConfirmed] = useState(false);

    const {
        markerPosition,
        setConfirmedPosition,
        setMarkerPosition,
        confirmedPosition,
    } = useMarker();

    useEffect(() => {
        console.log("ConfPositon:" + confirmedPosition);
        if (confirmedPosition) {
            const distance = L.latLng(confirmedPosition).distanceTo(koelnDom);
            console.log(`Die Entfernung beträgt: ${distance} Meter.`);
        }
    }, [confirmedPosition]);

    const handleClick = () => {
        setIsConfirmed(true);
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

    const handleContinue = () => {
        setMarkerPosition(null);
        setConfirmedPosition(null);
        setIsConfirmed(false);
    };

    const { koelnCenter } = useMarker();
    const koelnDom = [50.941278, 6.957016];

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
                setMarkerPosition(e.latlng);
                console.log("Pos: " + e.latlng);
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
                    {confirmedPosition && !markerPosition && (
                        <Marker
                            position={confirmedPosition}
                            icon={customMarkerIcon}
                        ></Marker>
                    )}
                    {confirmedPosition && (
                        <Marker
                            position={koelnDom}
                            icon={customMarkerIcon}
                        ></Marker>
                    )}
                </MapContainer>
            </div>

            {round <= totalRounds - 1 ? (
                !isConfirmed ? (
                    <button className="btn btn-primary" onClick={handleClick}>
                        Bestätigen
                    </button>
                ) : (
                    <button
                        className="btn btn-primary"
                        onClick={handleContinue}
                    >
                        Weiter
                    </button>
                )
            ) : (
                <Link to="/">
                    <button className="btn btn-primary">Fertig!</button>
                </Link>
            )}
        </div>
    );
};

export default LeafletMap;
