import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import useMarker from "../useMarker";

import UseHighscore from "../UseHighscore";
import { useNavigate } from "react-router-dom";

const LeafletMap = ({
    charName,
    round,
    setRound,
    coordinates,
    setPoint,
    totalRounds,
}) => {
    const { addHighscore } = UseHighscore();
    const [score, setScore] = useState(0);
    const [isConfirmed, setIsConfirmed] = useState(false);
    const navigate = useNavigate();
    let realScore = score;

    const {
        markerPosition,
        setConfirmedPosition,
        setMarkerPosition,
        confirmedPosition,
        koelnCenter,
    } = useMarker();

    useEffect(() => {
        if (confirmedPosition) {
            const distance =
                L.latLng(confirmedPosition).distanceTo(coordinates);
            // console.log(`Die Entfernung beträgt: ${distance} Meter.`);
            const maxDistance = 3000;
            const minDistance = 0;
            let distScore =
                ((maxDistance - distance) / (maxDistance - minDistance)) * 10;

            distScore = Math.max(0, Math.min(distScore, 10));

            distScore = Math.round(distScore);
            setPoint(distScore); // Um in Game anzuzeigen
            setScore(score + distScore);
            realScore += distScore;
            console.log("score: " + realScore);
        }
    }, [confirmedPosition]);

    const [errorMessage, setErrorMessage] = useState("");
    const handleClick = () => {
        if (markerPosition) {
            setIsConfirmed(true);
            setMarkerPosition(null);

            setConfirmedPosition(markerPosition);

            setErrorMessage("");
        } else {
            setErrorMessage("Bitte setzen Sie einen Marker.");
            setTimeout(() => {
                setErrorMessage("");
            }, 1000);
        }
    };

    const handleContinue = () => {
        setMarkerPosition(null);
        setConfirmedPosition(null);
        setIsConfirmed(false);
        setPoint(0);

        setRound(round + 1);
    };

    const handleFinish = () => {
        const distance = L.latLng(markerPosition).distanceTo(coordinates);
        // console.log(`Die Entfernung beträgt: ${distance} Meter.`);
        const maxDistance = 3000;
        const minDistance = 0;
        let distScore =
            ((maxDistance - distance) / (maxDistance - minDistance)) * 10;

        distScore = Math.max(0, Math.min(distScore, 10));

        distScore = Math.round(distScore);
        setPoint(distScore); // Um in Game anzuzeigen
        setScore(score + distScore);
        realScore += distScore;
        console.log("score: " + realScore);

        setTimeout(() => {
            navigate("/");
        }, 100);
        addHighscore(charName, realScore);
        console.log("Ende");
    };

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
            },
        });

        return markerPosition === null ? null : (
            <Marker position={markerPosition} icon={customMarkerIcon}></Marker>
        );
    };

    return (
        <div>
            {errorMessage && <p className="errorMessage">{errorMessage}</p>}
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
                            position={coordinates}
                            icon={customMarkerIcon}
                        ></Marker>
                    )}
                </MapContainer>
            </div>
            {round < totalRounds ? (
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
                <button onClick={handleFinish} className="btn btn-primary">
                    Fertig!
                </button>
            )}
        </div>
    );
};

export default LeafletMap;
