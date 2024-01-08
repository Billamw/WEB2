import React from "react";

const Box = ({ component }) => {
    return (
        <div className="container">
            <div className="box">{component}</div>
        </div>
    );
};

export default Box;
