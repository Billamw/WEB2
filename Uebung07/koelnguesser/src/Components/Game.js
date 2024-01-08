import React from "react";
import { Link } from "react-router-dom";
import UseHighscore from "./UseHighscore.js";

const Game = ({ charName }) => {
    const { addHighscore } = UseHighscore();

    const testFunction = () => {
        console.log(charName);
    };

    const handleClick = () => {
        console.log(charName + " hat 100 Punkte erreicht!");
        addHighscore(charName, 100);
    };

    return (
        <div>
            <h1>Game</h1>
            <button className="btn btn-primary" onClick={testFunction}></button>
            <Link to="/">
                <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={handleClick}
                >
                    {charName} du bist Fertig!
                </button>
            </Link>
        </div>
    );
};

export default Game;
