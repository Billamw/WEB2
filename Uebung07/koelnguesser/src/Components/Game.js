import React, { useState } from "react";
import { Link } from "react-router-dom";
import UseHighscore from "./UseHighscore.js";
import Box from "./Box.js";
import LeafletMap from "./MapTest/LeafletMap.js";
import useMarker from "./useMarker.js";

const Game = ({ charName }) => {
    const { addHighscore } = UseHighscore();
    const [round, setRound] = useState(1);
    const totalRounds = 10;
    const point = 6;
    const [score, setScore] = useState(0);

    const { markerPosition, setConfirmedPosition, setMarkerPosition } =
        useMarker();

    const handleClick = () => {
        setConfirmedPosition(markerPosition);
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
                                <LeafletMap charName={charName}></LeafletMap>
                            </div>
                        </div>
                    </div>
                }
            ></Box>
        </div>
        // <div>
        //     {/* <h1>Game</h1>
        //     <button className="btn btn-primary" onClick={handleClick}>
        //         Spiel das Spiel
        //     </button>
        //     <Link to="/">
        //         <button className="btn btn-primary" type="submit">
        //             {charName} du bist Fertig!
        //         </button>
        //     </Link> */}
        // </div>
    );
};

export default Game;
