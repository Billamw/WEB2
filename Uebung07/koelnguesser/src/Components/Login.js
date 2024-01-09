import React from "react";
import { Link } from "react-router-dom";
import UseHighscore from "./UseHighscore.js";

const Login = ({ setHeaderName }) => {
    const { highscore } = UseHighscore();

    const liveNameChane = (event) => {
        setHeaderName(event.target.value);
    };

    return (
        <div>
            <form onChange={liveNameChane}>
                <div className="inputContainer">
                    <input
                        className="form-control"
                        type="text"
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
                    <ol className="list-group">
                        {highscore
                            .sort((a, b) => b.score - a.score)
                            .map((entry, index) => (
                                <li key={index} className="list-group-item">
                                    {index + 1}. {entry.name} - {entry.score}
                                </li>
                            ))}
                    </ol>
                ) : (
                    <p className="highscore">Noch kein Highscore vorhanden</p>
                )}
            </div>
        </div>
    );
};

export default Login;
