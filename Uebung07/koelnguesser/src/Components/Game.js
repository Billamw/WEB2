import React, { useState } from "react";
import UseHighscore from "./UseHighscore.js";
import Box from "./Box.js";
import LeafletMap from "./MapTest/LeafletMap.js";
import useMarker from "./useMarker.js";

const Game = ({ charName }) => {
    const [round, setRound] = useState(1);
    const totalRounds = 10;
    const point = 6;

    return (
        <div>
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
                            <img src="url-zum-bild" alt="Ort" />
                            <div id="mapid">
                                <LeafletMap
                                    charName={charName}
                                    round={round}
                                    setRound={setRound}
                                ></LeafletMap>
                            </div>
                        </div>
                    </div>
                }
            ></Box>
        </div>
    );
};

export default Game;
