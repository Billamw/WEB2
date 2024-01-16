import React, { useEffect, useState } from "react";
import Box from "./Box.js";
import LeafletMap from "./MapTest/LeafletMap.js";
import useMarker from "./useMarker.js";

const Game = ({ charName }) => {
    const [round, setRound] = useState(1);
    const { places, shufflePlaces } = useMarker();
    const totalRounds = Object.keys(places).length;
    const [point, setPoint] = useState(0);

    useEffect(() => {
        shufflePlaces();
    }, []);

    const placesArray = Object.entries(places);
    let image;
    let coordinates;
    if (placesArray[round - 1] && placesArray[round - 1][1]) {
        image = placesArray[round - 1][1].image;
        coordinates = placesArray[round - 1][1].coordinates;
    }
    return (
        <Box
            component={
                <div>
                    <div>
                        <h2>Name: {charName}</h2>
                        <p>
                            Runde {round} von {totalRounds}
                        </p>
                        <p>Anzahl der Punkte: {point}</p>
                    </div>

                    <div>
                        <h2>Wo ist dieser Ort?</h2>
                        <img src={image} style={{ width: "50%" }} alt="Ort" />
                        {/* <img src="/images/koelndom.png" alt="test" /> */}
                        <div id="mapid">
                            <LeafletMap
                                charName={charName}
                                round={round}
                                setRound={setRound}
                                coordinates={coordinates}
                                setPoint={setPoint}
                                totalRounds={totalRounds}
                            ></LeafletMap>
                        </div>
                    </div>
                </div>
            }
        ></Box>
    );
};

export default Game;
