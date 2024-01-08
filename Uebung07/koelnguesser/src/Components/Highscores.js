import React, { useContext } from "react";
import { HighscoreContext } from "./HighscoreContext";

const Highscores = () => {
    const { highscore } = useContext(HighscoreContext);

    return (
        <div>
            {highscore.map((score, index) => (
                <div key={index}>
                    {score.name}: {score.score}
                </div>
            ))}
        </div>
    );
};

export default Highscores;
