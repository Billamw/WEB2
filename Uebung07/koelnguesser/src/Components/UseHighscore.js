import { useState } from "react";

// https://www.robinwieruch.de/local-storage-react/
// const person = { firstName: "Robin", lastName: "Wieruch" };

// localStorage.setItem("user", JSON.stringify(person));

// const stringifiedPerson = localStorage.getItem("user");
// const personAsObjectAgain = JSON.parse(stringifiedPerson);

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
