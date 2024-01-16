import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage.js";
import Game from "./Components/Game.js";
import Cataas from "./Components/Cataas.js";
import DeleteHighscore from "./Components/DeleteHighscore.js";
import "./App.css";
import { useState } from "react";

const App = () => {
    const [headerName, setHeaderName] = useState("");
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Homepage
                            headerName={headerName}
                            setHeaderName={setHeaderName}
                        />
                    }
                />
                <Route path="/game" element={<Game charName={headerName} />} />
                <Route path="/info" element={<Cataas />} />
                <Route path="/delete" element={<DeleteHighscore />} />
            </Routes>
        </Router>
    );
};

export default App;
