import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage.js";
import Game from "./Components/Game.js";
import Cataas from "./Components/Cataas.js";
import "./App.css";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/game" element={<Game />} />
                <Route path="/json" element={<Cataas />} />
            </Routes>
        </Router>
    );
};

export default App;
