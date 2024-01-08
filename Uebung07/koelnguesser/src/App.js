import React from "react";
import { HighscoreContext } from "./Components/HighscoreContext.js";
import UseHighscore from "./Components/UseHighscore.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage.js";
import Game from "./Components/Game.js";
import Cataas from "./Components/Cataas.js";
import DeleteHighscores from "./Components/DeleteHighscore.js";
import "./App.css";

const App = () => {
    const highscoreHook = UseHighscore();

    return (
        <HighscoreContext.Provider value={highscoreHook}>
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/game" element={<Game />} />
                    <Route path="/json" element={<Cataas />} />
                    <Route path="/delete" element={<DeleteHighscores />} />
                </Routes>
            </Router>
        </HighscoreContext.Provider>
    );
};

export default App;
