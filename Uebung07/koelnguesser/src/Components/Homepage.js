import React, { useState } from "react";

import Header from "./Header.js";
import Box from "./Box.js";
import Login from "./Login.js";

const Homepage = () => {
    const [headerName, setHeaderName] = useState("");
    return (
        <div>
            <Header headerName={headerName}></Header>
            <Box component={<Login setHeaderName={setHeaderName} />}></Box>
        </div>
    );
};

export default Homepage;
