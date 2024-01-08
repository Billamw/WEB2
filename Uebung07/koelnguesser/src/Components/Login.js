import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import UseHighscore from "./UseHighscore.js";

const Login = ({ setHeaderName }) => {
    const { highscore } = UseHighscore();
    const [name, setName] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleChange = (event) => {
        setHeaderName(event.target.value);
    };
    return (
        <div>
            <form onChange={handleChange}>
                <div className="inputContainer">
                    <input
                        className="form-control"
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        placeholder="Name eingeben"
                    />
                    <Link to="/game">
                        <button className="btn btn-primary" type="submit">
                            Start
                        </button>
                    </Link>
                </div>
            </form>
            <h2 className="highscore">Highscores</h2>
            <div className="highscores">
                {highscore.length > 0 ? (
                    <ul className="list-group">
                        {highscore.map((entry, index) => (
                            <li key={index} className="list-group-item">
                                {entry.name} - {entry.score}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Noch kein Highscore vorhanden</p>
                )}
            </div>
        </div>
    );
};

export default Login;
