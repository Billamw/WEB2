import { useState, useEffect } from "react";

const UseHighscore = () => {
    const [highscore, setHighscore] = useState(() => {
        const savedHighscores = localStorage.getItem("highscores");
        return savedHighscores ? JSON.parse(savedHighscores) : [];
    });

    useEffect(() => {
        localStorage.setItem("highscores", JSON.stringify(highscore));
    }, [highscore]);

    const addHighscore = (name, score) => {
        const existingHighscore = highscore.find((hs) => hs.name === name);

        if (existingHighscore) {
            if (score > existingHighscore.score) {
                setHighscore(
                    highscore.map((hs) =>
                        hs.name === name ? { name, score } : hs
                    )
                );
            }
        } else {
            setHighscore([...highscore, { name, score }]);
        }
    };

    const deleteHighscores = () => {
        setHighscore([]);
        localStorage.removeItem("highscores");
    };

    return {
        highscore,
        addHighscore,
        deleteHighscores,
    };
};

export default UseHighscore;
