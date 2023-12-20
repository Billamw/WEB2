import React from "react";
import Header from "./Components/Header.js";
import Box from "./Components/Box.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./Components/Homepage.js";
import "./App.css";

const App = () => {
    <div>
        <Router>
            <Route exact path="/" component={Homepage} />
        </Router>
        ;
    </div>;
};

export default App;
