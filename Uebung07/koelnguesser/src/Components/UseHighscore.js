import { useState } from "react";

const UseHighscore = () => {
    const [highscore, setHighscore] = useState([]);

    const addHighscore = (name, score) => {
        setHighscore([...highscore, { name, score }]);
    };

    return {
        highscore,
        addHighscore,
    };
};

export default UseHighscore;
