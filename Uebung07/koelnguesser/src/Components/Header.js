import React from "react";

const Header = (props) => {
    return (
        <div className="header">
            <p>Hey {props.name}</p>
            <p>Koelnguesser</p>
        </div>
    );
};

export default Header;
