import React, { useEffect } from "react";
import UseHighscore from "./UseHighscore.js";
import { Link } from "react-router-dom";

const DeleteHighscores = () => {
    const { deleteHighscores } = UseHighscore();

    useEffect(() => {
        deleteHighscores();
    });

    return (
        <div>
            Highscores gelöscht.
            <Link to="/">
                <button className="btn btn-primary">Fertig!</button>
            </Link>
        </div>
    );
};

export default DeleteHighscores;
