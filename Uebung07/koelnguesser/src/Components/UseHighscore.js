// import { useState } from "react";

// // https://www.robinwieruch.de/local-storage-react/
// // const person = { firstName: "Robin", lastName: "Wieruch" };

// // localStorage.setItem("user", JSON.stringify(person));

// // const stringifiedPerson = localStorage.getItem("user");
// // const personAsObjectAgain = JSON.parse(stringifiedPerson);

// const UseHighscore = () => {
//     const [highscore, setHighscore] = useState([]);

//     const addHighscore = (name, score) => {
//         setHighscore([...highscore, { name, score }]);
//     };

//     return {
//         highscore,
//         addHighscore,
//     };
// };

// export default UseHighscore;

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

    return {
        highscore,
        addHighscore,
    };
};

export default UseHighscore;
