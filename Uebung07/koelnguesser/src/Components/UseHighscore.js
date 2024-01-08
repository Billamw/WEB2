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
        setHighscore([...highscore, { name, score }]);
    };

    const deleteHighscores = () => {
        setHighscore([]);
        localStorage.removeItem("highscores");
    };

    const [name, setName] = useState("");

    return {
        highscore,
        addHighscore,
        deleteHighscores,
        name,
        setName,
    };
};

export default UseHighscore;
