import React from "react";
import Header from "./Components/Header.js";
import Box from "./Components/Box.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage.js";
import "./App.css";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
            </Routes>
        </Router>
    );
};

export default App;
