import React, { useState } from "react";
import UseHighscore from "./UseHighscore";
// import "./Box.css";

const Box = () => {
    const { highscore, addHighscore } = UseHighscore();
    const [name, setName] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name.trim() !== "") {
            // Hier fügst du den Highscore hinzu
            addHighscore(name, 0);
            setName("");
        }
    };

    return (
        <div class="container">
            <div class="box">
                <form onSubmit={handleSubmit}>
                    <div class="inputContainer">
                        <input
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                            placeholder="Name eingeben"
                        />
                        {/* Hier könnte ein weiteres Input-Feld für den Highscore sein */}
                        <button type="submit">Name hinzufügen</button>
                    </div>
                </form>
                <h2>Highscores</h2>
                <div class="highscores">
                    {highscore.length > 0 ? (
                        <ul>
                            {highscore.map((entry, index) => (
                                <li key={index}>
                                    {entry.name} - {entry.score}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Noch kein Highscore vorhanden</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Box;
