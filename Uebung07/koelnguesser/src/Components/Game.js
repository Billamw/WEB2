import React from "react";
import { Link } from "react-router-dom";

const Game = () => {
    return (
        <div>
            <h1>Game</h1>
            <Link to="/">
                <button className="btn btn-primary" type="submit">
                    Fertig!
                </button>
            </Link>
        </div>
    );
};

export default Game;
