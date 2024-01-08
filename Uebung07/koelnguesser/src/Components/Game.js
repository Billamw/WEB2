import React from "react";
import { Link } from "react-router-dom";
import UseHighscore from "./UseHighscore.js";

const Game = ({ name }) => {
    const { addHighscore } = UseHighscore();

    const handleClick = () => {
        addHighscore(name, 100);
    };

    return (
        <div>
            <h1>Game</h1>
            <Link to="/">
                <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={handleClick}
                >
                    {name} du bist Fertig!
                </button>
            </Link>
        </div>
    );
};

export default Game;
