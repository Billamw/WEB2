import React, { useEffect } from "react";
import UseHighscore from "./UseHighscore.js";

const DeleteHighscores = () => {
    const { deleteHighscores } = UseHighscore();

    useEffect(() => {
        deleteHighscores();
    });

    return <div>Highscores gelöscht.</div>;
};

export default DeleteHighscores;
